import React, { useState } from 'react';
import './RendezVous.css';

function RendezVous() {
  const [rendezvous, setRendezvous] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');
  const [selectedRdv, setSelectedRdv] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [rdvToDelete, setRdvToDelete] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedRdv !== null) {
      const updated = rendezvous.map((rdv, index) =>
        index === selectedRdv ? { nom, date, heure } : rdv
      );
      setRendezvous(updated);
      setSelectedRdv(null);
    } else {
      setRendezvous([...rendezvous, { nom, date, heure }]);
    }

    setNom('');
    setDate('');
    setHeure('');
    setShowForm(false);
  };

  const handleDelete = () => {
    setRendezvous(rendezvous.filter((_, i) => i !== rdvToDelete));
    setShowModal(false);
  };

  const handleEdit = (rdv, index) => {
    setNom(rdv.nom);
    setDate(rdv.date);
    setHeure(rdv.heure);
    setSelectedRdv(index);
    setShowForm(true);
  };

  return (
    <div className="rendezvous-container">
      <div className="rendezvous-header">
        <h2>Listes des Rendez-vous</h2>
        <button className="add-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Annuler' : 'Ajouter un rendez-vous'}
        </button>
      </div>

      {showForm && (
        <form className="rendezvous-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom du patient"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
            required
          />
          <button type="submit" className="save-button">
            {selectedRdv !== null ? 'Modifier' : 'Enregistrer'}
          </button>
        </form>
      )}

      <table className="rendezvous-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rendezvous.map((rdv, index) => (
            <tr key={index}>
              <td>{rdv.nom}</td>
              <td>{rdv.date}</td>
              <td>{rdv.heure}</td>
              <td className="action-buttons">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(rdv, index)}
                >
                  Modifier
                </button>
                <button
                  className="delete-button"
                  onClick={() => {
                    setRdvToDelete(index);
                    setShowModal(true);
                  }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmation de suppression */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Voulez-vous vraiment supprimer ce rendez-vous ?</p>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={handleDelete}>
                Oui, supprimer
              </button>
              <button className="cancel-button" onClick={() => setShowModal(false)}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RendezVous;
