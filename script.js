// Team members data
const teamMembers = [
    {
        name: 'Alex Morgan',
        role: 'Junior Frontend Developer',
        image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Specializes in creating responsive user interfaces using modern web technologies.'
    },
    {
        name: 'Samira Patel',
        role: 'Trainee Full Stack Developer',
        image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Working on both frontend and backend development with a focus on JavaScript.'
    },
    {
        name: 'James Wilson',
        role: 'Junior Backend Developer',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Passionate about creating efficient server-side applications and APIs.'
    }
];

// Job listings data
const jobs = [
    {
        title: 'Junior Frontend Developer',
        location: 'London (Hybrid)',
        type: 'Full-time',
        description: 'Join our frontend team to create responsive and accessible web applications.'
    },
    {
        title: 'Junior Backend Developer',
        location: 'Manchester (Hybrid)',
        type: 'Full-time',
        description: 'Work on server-side applications and help build robust APIs.'
    },
    {
        title: 'Junior Full Stack Developer',
        location: 'Remote (UK)',
        type: 'Full-time',
        description: 'Develop both frontend and backend components of web applications.'
    }
];

// Function to create team member cards
function createTeamMemberCards() {
    const teamGrid = document.getElementById('teamGrid');
    
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';
        
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div class="team-member-info">
                <h3>${member.name}</h3>
                <p class="role">${member.role}</p>
                <p>${member.description}</p>
            </div>
        `;
        
        teamGrid.appendChild(memberCard);
    });
}

// Function to create job listings
function createJobListings() {
    const jobsList = document.getElementById('jobsList');
    
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <div class="job-details">
                <span>${job.location}</span>
                <span>${job.type}</span>
            </div>
            <p>${job.description}</p>
            <a href="#apply" class="cta-button">Apply Now</a>
        `;
        
        jobsList.appendChild(jobCard);
    });
}

// Form submission handler
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;
    const message = document.getElementById('message').value;
    
    // Simple form validation
    if (!name || !email || !position || !message) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your application! We will contact you soon.');
    this.reset();
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createTeamMemberCards();
    createJobListings();
});