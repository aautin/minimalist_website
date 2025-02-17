function switchPanel(index: number) {
    // Hide panels
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });
    // Hide buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active');
    });


    // Show selected panel and btn
    document.getElementById(`panel${index}`).classList.add('active');
    document.getElementById(`btn${index}`).classList.add('active');
}
