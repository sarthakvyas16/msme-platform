// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample data for credit options and notifications
    const creditOptions = [
        { id: 1, name: 'Loan A', interestRate: '5%', amount: '$5,000' },
        { id: 2, name: 'Loan B', interestRate: '7%', amount: '$10,000' },
    ];

    const notifications = [
        'New loan options available!',
        'Reminder: Your payment is due next week.',
    ];

    const educationalResources = [
        { title: 'Understanding Credit Scores', url: '#' },
        { title: 'How to Apply for a Loan', url: '#' },
    ];

    // Populate credit options
    const optionsList = document.getElementById('optionsList');
    creditOptions.forEach(option => {
        const item = document.createElement('li');
        item.textContent = `${option.name} - ${option.amount} (${option.interestRate})`;
        optionsList.appendChild(item);
    });

    // Populate notifications
    const notificationsList = document.getElementById('notificationsList');
    notifications.forEach(note => {
        const listItem = document.createElement('li');
        listItem.textContent = note;
        notificationsList.appendChild(listItem);
    });

    // Populate educational resources
    const resourcesList = document.getElementById('resourcesList');
    educationalResources.forEach(resource => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${resource.url}">${resource.title}</a>`;
        resourcesList.appendChild(listItem);
    });

    // Sample credit score
    document.getElementById('creditScore').innerText = Math.floor(Math.random() * 300) + 700;

    // Chart setup (Chart.js)
    const ctx = document.getElementById('healthChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Cash Flow',
                data: [1200, 1900, 3000, 2500, 2000],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Expense Tracking Functionality
    document.getElementById('expenseForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('expenseName').value;
        const amount = document.getElementById('expenseAmount').value;

        const expenseItem = document.createElement('li');
        expenseItem.textContent = `${name} - $${amount}`;
        document.getElementById('expenseList').appendChild(expenseItem);

        // Reset form
        e.target.reset();
    });
});
