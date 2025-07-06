document.addEventListener('DOMContentLoaded', function() {
    // Configuration initiale avec 8 habitudes par catégorie
    const categories = [
        { id: 'professionnel', name: 'Professionnel', color: '#4a89dc', habits: [
            { id: 'pro1', name: 'Planifier la journée', streak: 0 },
            { id: 'pro2', name: 'Apprentissage continu (30min)', streak: 0 },
            { id: 'pro3', name: 'Réseautage (1 action)', streak: 0 },
            { id: 'pro4', name: 'Tâche importante terminée', streak: 0 },
            { id: 'pro5', name: 'Revue des objectifs', streak: 0 },
            { id: 'pro6', name: 'Délégation efficace', streak: 0 },
            { id: 'pro7', name: 'Feedback donné/reçu', streak: 0 },
            { id: 'pro8', name: 'Organisation espace travail', streak: 0 }
        ]},
        { id: 'sante', name: 'Santé', color: '#48cfad', habits: [
            { id: 'sante1', name: '30 min d\'exercice', streak: 0 },
            { id: 'sante2', name: '7h de sommeil', streak: 0 },
            { id: 'sante3', name: 'Hydratation (2L)', streak: 0 },
            { id: 'sante4', name: 'Repas équilibrés', streak: 0 },
            { id: 'sante5', name: 'Pause écran 1h avant lit', streak: 0 },
            { id: 'sante6', name: 'Étirements/méditation', streak: 0 },
            { id: 'sante7', name: 'Suivi santé', streak: 0 },
            { id: 'sante8', name: 'Marche 10k pas', streak: 0 }
        ]},
        { id: 'spiritualite', name: 'Spiritualité', color: '#a0d468', habits: [
            { id: 'spi1', name: 'Méditation (10min)', streak: 0 },
            { id: 'spi2', name: 'Lecture spirituelle', streak: 0 },
            { id: 'spi3', name: 'Journal de gratitude', streak: 0 },
            { id: 'spi4', name: 'Temps de silence', streak: 0 },
            { id: 'spi5', name: 'Prière/réflexion', streak: 0 },
            { id: 'spi6', name: 'Acte de gentillesse', streak: 0 },
            { id: 'spi7', name: 'Connexion nature', streak: 0 },
            { id: 'spi8', name: 'Pleine conscience', streak: 0 }
        ]},
        { id: 'business', name: 'Business', color: '#5d9cec', habits: [
            { id: 'biz1', name: 'Développement produit', streak: 0 },
            { id: 'biz2', name: 'Marketing (1 action)', streak: 0 },
            { id: 'biz3', name: 'Analyse financière', streak: 0 },
            { id: 'biz4', name: 'Relation client', streak: 0 },
            { id: 'biz5', name: 'Stratégie long terme', streak: 0 },
            { id: 'biz6', name: 'Formation équipe', streak: 0 },
            { id: 'biz7', name: 'Veille concurrentielle', streak: 0 },
            { id: 'biz8', name: 'Automatisation', streak: 0 }
        ]},
        { id: 'mindset', name: 'Mindset', color: '#ec87c0', habits: [
            { id: 'mind1', name: 'Visualisation', streak: 0 },
            { id: 'mind2', name: 'Affirmations', streak: 0 },
            { id: 'mind3', name: 'Journaling', streak: 0 },
            { id: 'mind4', name: 'Fixation objectifs', streak: 0 },
            { id: 'mind5', name: 'Revue progrès', streak: 0 },
            { id: 'mind6', name: 'Lecture inspirante', streak: 0 },
            { id: 'mind7', name: 'Sortie zone confort', streak: 0 },
            { id: 'mind8', name: 'Gestion stress', streak: 0 }
        ]},
        { id: 'couple', name: 'Couple', color: '#ac92ec', habits: [
            { id: 'couple1', name: 'Temps qualité', streak: 0 },
            { id: 'couple2', name: 'Communication', streak: 0 },
            { id: 'couple3', name: 'Romance', streak: 0 },
            { id: 'couple4', name: 'Projet commun', streak: 0 },
            { id: 'couple5', name: 'Reconnaissance', streak: 0 },
            { id: 'couple6', name: 'Résolution conflit', streak: 0 },
            { id: 'couple7', name: 'Rituel quotidien', streak: 0 },
            { id: 'couple8', name: 'Temps séparé sain', streak: 0 }
        ]},
        { id: 'famille', name: 'Famille', color: '#4fc1e9', habits: [
            { id: 'fam1', name: 'Temps en famille', streak: 0 },
            { id: 'fam2', name: 'Appels proches', streak: 0 },
            { id: 'fam3', name: 'Activité familiale', streak: 0 },
            { id: 'fam4', name: 'Éducation enfants', streak: 0 },
            { id: 'fam5', name: 'Tradition familiale', streak: 0 },
            { id: 'fam6', name: 'Soutien émotionnel', streak: 0 },
            { id: 'fam7', name: 'Organisation maison', streak: 0 },
            { id: 'fam8', name: 'Budget familial', streak: 0 }
        ]},
        { id: 'finances', name: 'Finances', color: '#a0d468', habits: [
            { id: 'fin1', name: 'Suivi des dépenses', streak: 0 },
            { id: 'fin2', name: 'Investissement', streak: 0 },
            { id: 'fin3', name: 'Éducation financière', streak: 0 },
            { id: 'fin4', name: 'Épargne', streak: 0 },
            { id: 'fin5', name: 'Revue budget', streak: 0 },
            { id: 'fin6', name: 'Dette réduite', streak: 0 },
            { id: 'fin7', name: 'Négociation', streak: 0 },
            { id: 'fin8', name: 'Plan long terme', streak: 0 }
        ]},
		 { id: 'loisirs', name: 'Loisirs', color: '#a0d468', habits: [
            { id: 'lois1', name: 'Activité créative', streak: 0 },
            { id: 'lois2', name: 'Temps de détente', streak: 0 },
            { id: 'lois3', name: 'Pratique artistique', streak: 0 },
            { id: 'lois4', name: 'Jeu/Divertissement', streak: 0 },
            { id: 'lois5', name: 'Découverte culturelle', streak: 0 },
            { id: 'lois6', name: 'Temps en plein air', streak: 0 },
            { id: 'lois7', name: 'Passe-temps favori', streak: 0 },
            { id: 'lois8', name: 'Expression personnelle', streak: 0 }
        ]},
        { id: 'voyage', name: 'Voyage', color: '#4fc1e9', habits: [
            { id: 'voy1', name: 'Planification voyage', streak: 0 },
            { id: 'voy2', name: 'Apprentissage langue', streak: 0 },
            { id: 'voy3', name: 'Découverte locale', streak: 0 },
            { id: 'voy4', name: 'Budget voyage', streak: 0 },
            { id: 'voy5', name: 'Préparation itinéraire', streak: 0 },
            { id: 'voy6', name: 'Culture destination', streak: 0 },
            { id: 'voy7', name: 'Réservation/logistique', streak: 0 },
            { id: 'voy8', name: 'Souvenirs/partage', streak: 0 }
        ]},
        { id: 'lecture', name: 'Lecture et Certifications', color: '#ac92ec', habits: [
            { id: 'lec1', name: 'Lecture éducative', streak: 0 },
            { id: 'lec2', name: 'Prise de notes', streak: 0 },
            { id: 'lec3', name: 'Formation en ligne', streak: 0 },
            { id: 'lec4', name: 'Révision certification', streak: 0 },
            { id: 'lec5', name: 'Lecture plaisir', streak: 0 },
            { id: 'lec6', name: 'Résumé/concepts clés', streak: 0 },
            { id: 'lec7', name: 'Pratique compétences', streak: 0 },
            { id: 'lec8', name: 'Partage connaissances', streak: 0 }
        ]},
        { id: 'reseau', name: 'Réseau', color: '#ed5565', habits: [
            { id: 'res1', name: 'Contact nouveau', streak: 0 },
            { id: 'res2', name: 'Entretien relation', streak: 0 },
            { id: 'res3', name: 'Participation événement', streak: 0 },
            { id: 'res4', name: 'Partage opportunité', streak: 0 },
            { id: 'res5', name: 'Mentorat/demande aide', streak: 0 },
            { id: 'res6', name: 'Mise à jour profil', streak: 0 },
            { id: 'res7', name: 'Recommendation', streak: 0 },
            { id: 'res8', name: 'Feedback réseau', streak: 0 }
        ]}
    ];

    // Initialisation
    let habitData = JSON.parse(localStorage.getItem('habitData')) || {};
    let currentDate = new Date();
    let currentViewDate = new Date();
    let balanceChart = null; // Variable pour stocker l'instance du graphique

    // Thème
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }

    // Initialiser l'application
    loadStreaks();
    renderCategories();
    renderStreaks();
    renderCalendar();
    updateStats();

    // Gestionnaires d'événements
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentViewDate.setMonth(currentViewDate.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentViewDate.setMonth(currentViewDate.getMonth() + 1);
        renderCalendar();
    });

    // Fonctions
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        }
    }

    function renderCategories() {
        const container = document.getElementById('categoriesContainer');
        container.innerHTML = '';

        categories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4';
            card.innerHTML = `
                <div class="card category-card mb-3">
                    <div class="card-header d-flex justify-content-between align-items-center" style="border-left: 4px solid ${category.color}">
                        <span>${category.name}</span>
                        <span class="badge rounded-pill" style="background-color: ${category.color}">${getCategoryCompletion(category.id)}%</span>
                    </div>
                    <div class="card-body">
                        ${renderHabits(category)}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        // Ajouter des écouteurs d'événements pour les cases à cocher
        document.querySelectorAll('.habit-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const habitId = this.dataset.habitId;
                const dateKey = formatDate(currentDate);
                
                if (!habitData[dateKey]) {
                    habitData[dateKey] = {};
                }
                
                if (this.checked) {
                    habitData[dateKey][habitId] = true;
                    
                    // Mettre à jour la série
                    const category = categories.find(cat => cat.habits.some(h => h.id === habitId));
                    const habit = category.habits.find(h => h.id === habitId);
                    habit.streak += 1;
                } else {
                    delete habitData[dateKey][habitId];
                    
                    // Réinitialiser la série
                    const category = categories.find(cat => cat.habits.some(h => h.id === habitId));
                    const habit = category.habits.find(h => h.id === habitId);
                    habit.streak = 0;
                }
                
                localStorage.setItem('habitData', JSON.stringify(habitData));
                renderStreaks();
                updateStats();
            });
        });
    }

    function renderHabits(category) {
        let html = '';
        const dateKey = formatDate(currentDate);
        const todayHabits = habitData[dateKey] || {};

        category.habits.forEach(habit => {
            const isChecked = todayHabits[habit.id] || false;
            html += `
                <div class="habit-item">
                    <input type="checkbox" class="habit-checkbox" data-habit-id="${habit.id}" ${isChecked ? 'checked' : ''}>
                    <span class="habit-name">${habit.name}</span>
                    ${habit.streak > 0 ? `<span class="streak-badge">${habit.streak} jours</span>` : ''}
                </div>
            `;
        });

        return html;
    }

    function getCategoryCompletion(categoryId) {
        const category = categories.find(cat => cat.id === categoryId);
        if (!category) return 0;
        
        const dateKey = formatDate(currentDate);
        const todayHabits = habitData[dateKey] || {};
        let completed = 0;
        
        category.habits.forEach(habit => {
            if (todayHabits[habit.id]) completed++;
        });
        
        return Math.round((completed / category.habits.length) * 100);
    }

    function renderStreaks() {
        const container = document.getElementById('streaksContainer');
        container.innerHTML = '';
        
        // Trier les habitudes par série descendante
        const allHabits = categories.flatMap(category => category.habits);
        const sortedHabits = [...allHabits].sort((a, b) => b.streak - a.streak);
        
        sortedHabits.forEach(habit => {
            if (habit.streak > 0) {
                const category = categories.find(cat => cat.habits.some(h => h.id === habit.id));
                const card = document.createElement('div');
                card.className = 'mb-2';
                card.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>${habit.name}</strong>
                            <div class="text-muted small">${category.name}</div>
                        </div>
                        <span class="streak-badge">${habit.streak} jours</span>
                    </div>
                    <div class="progress mt-1" style="height: 6px;">
                        <div class="progress-bar" role="progressbar" style="width: ${Math.min(habit.streak, 100)}%; background-color: ${category.color}" aria-valuenow="${habit.streak}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                `;
                container.appendChild(card);
            }
        });
        
        if (container.innerHTML === '') {
            container.innerHTML = '<p class="text-muted">Aucune série en cours. Cochez des habitudes quotidiennes pour commencer!</p>';
        }
    }

    function renderCalendar() {
        const container = document.getElementById('calendarContainer');
        const monthYear = document.getElementById('currentMonthYear');
        
        // Mettre à jour le mois/année affiché
        const options = { month: 'long', year: 'numeric' };
        monthYear.textContent = currentViewDate.toLocaleDateString('fr-FR', options);
        
        // Créer le calendrier
        const firstDay = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth(), 1);
        const lastDay = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() + 1, 0);
        
        const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Lundi comme premier jour
        const totalDays = lastDay.getDate();
        
        let html = '<div class="calendar-grid">';
        
        // En-têtes des jours
        const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
        days.forEach(day => {
            html += `<div class="calendar-day-header">${day}</div>`;
        });
        
        // Jours vides au début
        for (let i = 0; i < startDay; i++) {
            html += '<div class="calendar-day"></div>';
        }
        
        // Jours du mois
        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth(), i);
            const dateKey = formatDate(date);
            const dayData = habitData[dateKey] || {};
            const completedCount = Object.keys(dayData).length;
            const totalHabits = categories.flatMap(cat => cat.habits).length;
            const completionPercentage = totalHabits > 0 ? Math.round((completedCount / totalHabits) * 100) : 0;
            
            const isToday = date.toDateString() === currentDate.toDateString();
            const isCurrentMonth = date.getMonth() === currentViewDate.getMonth();
            
            let dayClass = 'calendar-day';
            if (!isCurrentMonth) dayClass += ' other-month';
            if (isToday) dayClass += ' today';
            if (completedCount > 0) dayClass += ' completed';
            
            html += `
                <div class="${dayClass}" data-date="${dateKey}" title="${completionPercentage}% complété">
                    ${i}
                    ${completedCount > 0 ? `<div class="small">${completedCount}/${totalHabits}</div>` : ''}
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
        
        // Ajouter des écouteurs d'événements pour les jours
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.addEventListener('click', function() {
                const dateStr = this.dataset.date;
                if (dateStr) {
                    const [year, month, day] = dateStr.split('-').map(Number);
                    currentDate = new Date(year, month - 1, day);
                    renderCategories();
                }
            });
        });
    }

    function updateStats() {
        // Taux de complétion global
        const dateKey = formatDate(currentDate);
        const todayHabits = habitData[dateKey] || {};
        const totalHabits = categories.flatMap(cat => cat.habits).length;
		const globalCompletion = totalHabits > 0 ? Math.round((Object.keys(todayHabits).length / totalHabits) * 100) : 0;
        
        const globalElement = document.getElementById('globalCompletion');
        globalElement.style.width = `${globalCompletion}%`;
        globalElement.textContent = `${globalCompletion}%`;
        
        // Habitude la plus forte
        const allHabits = categories.flatMap(category => category.habits);
        const bestHabit = allHabits.reduce((best, current) => current.streak > best.streak ? current : best, {streak: 0});
        document.getElementById('bestHabit').textContent = bestHabit.streak > 0 ? `${bestHabit.name} (${bestHabit.streak} jours)` : '-';
        
        // Graphique d'équilibre
        renderBalanceChart();
    }

    function renderBalanceChart() {
        const ctx = document.getElementById('balanceChart').getContext('2d');
        
        // Détruire le graphique existant s'il y en a un
        if (balanceChart !== null) {
            balanceChart.destroy();
        }
        
        // Calculer le taux de complétion par catégorie
        const labels = categories.map(cat => cat.name);
        const data = categories.map(cat => getCategoryCompletion(cat.id));
        const backgroundColors = categories.map(cat => cat.color);
        
        balanceChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Taux de complétion',
                    data: data,
                    backgroundColor: 'rgba(74, 137, 220, 0.2)',
                    borderColor: 'rgba(74, 137, 220, 1)',
                    pointBackgroundColor: backgroundColors,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(74, 137, 220, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Charger les séries depuis les données stockées
    function loadStreaks() {
        const allDates = Object.keys(habitData).sort();
        const allHabits = categories.flatMap(category => category.habits);
        
        allHabits.forEach(habit => {
            habit.streak = 0;
        });
        
        let currentStreaks = {};
        allHabits.forEach(habit => {
            currentStreaks[habit.id] = 0;
        });
        
        // Parcourir toutes les dates dans l'ordre chronologique
        for (const dateStr of allDates) {
            const dateHabits = habitData[dateStr];
            
            allHabits.forEach(habit => {
                if (dateHabits[habit.id]) {
                    currentStreaks[habit.id]++;
                    if (currentStreaks[habit.id] > habit.streak) {
                        habit.streak = currentStreaks[habit.id];
                    }
                } else {
                    currentStreaks[habit.id] = 0;
                }
            });
        }
    }
});
