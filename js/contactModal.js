document.addEventListener("DOMContentLoaded", function() {
    // Function to open the modal
    function openModal() {
        document.getElementById('copilotModal').style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById('copilotModal').style.display = 'none';
    }

    // Event listener for the "Contact us" button to open the modal
    document.getElementById('openModalBtn').addEventListener('click', openModal);

    // Event listener for the close button to close the modal
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
});