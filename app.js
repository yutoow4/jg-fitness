/**
 * JG Fitness - Main Application
 * A minimalist fitness training app
 */

// ========================================
// DATA STORAGE KEYS
// ========================================
const STORAGE_KEYS = {
    SETTINGS: 'jg_fitness_settings',
    WORKOUT_HISTORY: 'jg_fitness_history',
    PERSONAL_RECORDS: 'jg_fitness_prs',
    CURRENT_LOG: 'jg_fitness_current_log',
    CUSTOM_WORKOUTS: 'jg_fitness_custom_workouts'
};

// ========================================
// TRAINING PROGRAMS - 3 Jours
// ========================================
const TRAINING_PROGRAMS = [
    {
        id: 'day1_force',
        name: 'Dimanche - Force',
        subtitle: 'Day 1 - Force',
        icon: '🔥',
        exercises: [
            {
                id: 'd1_presse_cuisses',
                name: 'Presse à Cuisses (Leg Press)',
                muscles: 'Quadriceps / Fessiers / Ischios',
                restTime: 120,
                sets: 4,
                reps: '8-10',
                instructions: 'Pieds placés assez haut sur le plateau. Pousser avec les talons. Ne pas verrouiller les genoux en haut et ne pas descendre trop bas pour ne pas les compresser.',
                media: 'images/leg_press.png'
            },
            {
                id: 'd1_tirage_vertical',
                name: 'Tirage Vertical (Prise neutre ou large)',
                muscles: 'Grand Dorsal / Dos',
                restTime: 90,
                sets: 4,
                reps: '8-10',
                instructions: 'Tirer la barre/poignée vers le haut de la poitrine en contractant le dos. Ne pas tirer avec les bras.',
                media: 'images/lat_pulldown.png'
            },
            {
                id: 'd1_souleve_terre_roumain',
                name: 'Soulevé de Terre Roumain (Haltères)',
                muscles: 'Fessiers / Ischio-jambiers',
                restTime: 90,
                sets: 3,
                reps: '10-12',
                instructions: 'Garder le dos droit et les genoux très légèrement fléchis. Descendre les haltères le long des jambes en poussant les fessiers vers l\'arrière, jusqu\'à sentir un étirement derrière les cuisses.',
                media: 'images/romanian_deadlift.png'
            },
            {
                id: 'd1_developpe_couche',
                name: 'Développé Couché (Haltères ou Machine)',
                muscles: 'Pectoraux',
                restTime: 90,
                sets: 3,
                reps: '10-12',
                instructions: '(Si haltères) Contrôler la descente des haltères au niveau des pectoraux. Garder les pieds au sol pour la stabilité.',
                media: 'images/dumbbell_bench_press.png'
            },
            {
                id: 'd1_extensions_triceps',
                name: 'Extensions Triceps Corde (Poulie haute)',
                muscles: 'Triceps (Médians et Latéraux)',
                restTime: 60,
                sets: 3,
                reps: '12-15',
                instructions: 'Écarter légèrement la corde en bas du mouvement. Garder les coudes fixes contre le corps.',
                media: 'images/tricep_pushdown.png'
            },
            {
                id: 'd1_curl_biceps',
                name: 'Curl Biceps (Haltères ou Barre)',
                muscles: 'Biceps',
                restTime: 60,
                sets: 3,
                reps: '12-15',
                instructions: 'Contrôler la descente (phase négative). Éviter de se balancer pour soulever le poids.',
                media: 'images/bicep_curl.png'
            }
        ]
    },
    {
        id: 'day2_volume',
        name: 'Lundi - Volume',
        subtitle: 'Day 2 - Volume',
        icon: '💪',
        exercises: [
            {
                id: 'd2_squat_hack',
                name: 'Squat Hack (Machine guidée)',
                muscles: 'Quadriceps / Fessiers',
                restTime: 90,
                sets: 4,
                reps: '12-15',
                instructions: 'La machine guide le mouvement, ce qui est sécuritaire pour les genoux. Contrôler l\'amplitude et ne pas verrouiller les genoux en haut.',
                media: 'images/hack_squat.png'
            },
            {
                id: 'd2_rowing',
                name: 'Rowing (Machine ou Haltère)',
                muscles: 'Dos (Épaisseur)',
                restTime: 90,
                sets: 4,
                reps: '12-15',
                instructions: 'Tirer le coude vers l\'arrière en pinçant l\'omoplate. Viser les muscles au milieu du dos.',
                media: 'images/seated_row.png'
            },
            {
                id: 'd2_leg_extension',
                name: 'Leg Extension (Machine)',
                muscles: 'Quadriceps (Isolation)',
                restTime: 60,
                sets: 3,
                reps: '15-20',
                instructions: 'Mouvement très contrôlé. Charge légère à modérée. Ne pas verrouiller brutalement les genoux en haut pour les protéger.',
                media: 'images/leg_extension.png'
            },
            {
                id: 'd2_face_pulls',
                name: 'Face Pulls (Poulie haute)',
                muscles: 'Arrière des Épaules / Posture',
                restTime: 60,
                sets: 3,
                reps: '15-20',
                instructions: 'Tirer la corde vers le visage en écartant les mains. Concentrez-vous sur l\'arrière des épaules.',
                media: 'images/face_pulls.png'
            },
            {
                id: 'd2_fentes_bulgares',
                name: 'Fentes Bulgares (Poids du corps ou légères)',
                muscles: 'Fessiers / Ischios',
                restTime: 90,
                sets: 3,
                reps: '10-12 / jambe',
                instructions: 'Le genou avant doit rester aligné avec le pied. La charge doit être légère si les genoux sont sensibles.',
                media: 'images/bulgarian_split_squat.png'
            },
            {
                id: 'd2_planche',
                name: 'Planche (Gainage)',
                muscles: 'Abdominaux',
                restTime: 60,
                sets: 3,
                reps: '30-60 sec',
                instructions: 'Garder le corps droit et le bassin gainé, sans laisser le dos se creuser.',
                media: 'images/plank.png'
            }
        ]
    },
    {
        id: 'day3_endurance',
        name: 'Mardi - Endurance',
        subtitle: 'Day 3 - Endurance',
        icon: '🏃‍♀️',
        exercises: [
            {
                id: 'd3_leg_curl',
                name: 'Leg Curl (Machine assise ou allongée)',
                muscles: 'Ischio-jambiers (arrière des cuisses)',
                restTime: 90,
                sets: 4,
                reps: '12-15',
                instructions: 'Concentrez-vous sur la contraction de l\'arrière de la cuisse. Contrôler le retour du poids.',
                media: 'images/leg_curl.png'
            },
            {
                id: 'd3_hyperextensions',
                name: 'Hyperextensions (Banc à lombaires)',
                muscles: 'Lombaires / Fessiers',
                restTime: 60,
                sets: 3,
                reps: '15-20',
                instructions: 'Croiser les bras sur la poitrine et monter le corps jusqu\'à l\'alignement du dos. Ne pas monter au-dessus pour ne pas cambrer.',
                media: 'images/back_extension.png'
            },
            {
                id: 'd3_developpe_halteres',
                name: 'Développé Haltères assis (Modéré)',
                muscles: 'Épaules / Triceps',
                restTime: 90,
                sets: 3,
                reps: '12',
                instructions: 'Charge légère à modérée pour maintenir la force sans surdévelopper la largeur des épaules.',
                media: 'images/shoulder_press.png'
            },
            {
                id: 'd3_pompes',
                name: 'Pompes (sur les genoux si besoin)',
                muscles: 'Pectoraux / Triceps',
                restTime: 60,
                sets: 3,
                reps: 'Max de reps',
                instructions: 'Garder le corps droit (planche) et descendre la poitrine vers le sol. Utiliser les genoux pour simplifier l\'exercice.',
                media: 'images/push_ups.png'
            },
            {
                id: 'd3_abduction_hanches',
                name: 'Abduction de Hanches (Machine)',
                muscles: 'Fessiers (Galbe)',
                restTime: 60,
                sets: 3,
                reps: '20',
                instructions: 'Viser une contraction forte sur les côtés des fessiers.',
                media: 'images/hip_abduction.png'
            },
            {
                id: 'd3_curl_marteau',
                name: 'Curl Marteau (Haltères)',
                muscles: 'Biceps / Avant-bras',
                restTime: 60,
                sets: 3,
                reps: '12-15',
                instructions: 'Tenir les haltères comme un marteau. Excellent pour le galbe du bras et la force de préhension.',
                media: 'images/hammer_curl.png'
            }
        ]
    }
];

// ========================================
// APP STATE
// ========================================
const AppState = {
    currentView: 'seance-view',
    currentProgram: null,
    currentExerciseIndex: 0,
    workoutLog: {},
    timerInterval: null,
    timerRemaining: 0,
    settings: {
        notifications: false,
        sound: true,
        vibration: true
    }
};

// ========================================
// DOM ELEMENTS
// ========================================
const DOM = {};

// ========================================
// INITIALIZATION
// ========================================
function init() {
    // Cache DOM elements
    cacheDOMElements();

    // Load saved settings
    loadSettings();

    // Setup event listeners
    setupEventListeners();

    // Update current date
    updateCurrentDate();

    // Render programs
    renderPrograms();

    // Update profile stats
    updateProfileStats();

    console.log('✅ JG Fitness initialized');
}

function cacheDOMElements() {
    // Views
    DOM.views = document.querySelectorAll('.view');
    DOM.seanceView = document.getElementById('seance-view');
    DOM.reglagesView = document.getElementById('reglages-view');
    DOM.profilView = document.getElementById('profil-view');

    // Navigation
    DOM.navItems = document.querySelectorAll('.nav-item');

    // Header
    DOM.currentDate = document.getElementById('currentDate');

    // Program selector
    DOM.programSelector = document.getElementById('programSelector');
    DOM.programCards = document.getElementById('programCards');

    // Workout container
    DOM.workoutContainer = document.getElementById('workoutContainer');
    DOM.backToPrograms = document.getElementById('backToPrograms');
    DOM.currentProgramName = document.getElementById('currentProgramName');
    DOM.workoutProgress = document.getElementById('workoutProgress');

    // Exercise card
    DOM.exerciseCard = document.getElementById('exerciseCard');
    DOM.exerciseMedia = document.getElementById('exerciseMedia');
    DOM.exerciseName = document.getElementById('exerciseName');
    DOM.exerciseMuscles = document.getElementById('exerciseMuscles');
    DOM.restTime = document.getElementById('restTime');
    DOM.setsCount = document.getElementById('setsCount');
    DOM.repsCount = document.getElementById('repsCount');
    DOM.exerciseInstructions = document.getElementById('exerciseInstructions');

    // Performance log
    DOM.logEntries = document.getElementById('logEntries');

    // Navigation buttons
    DOM.prevExercise = document.getElementById('prevExercise');
    DOM.nextExercise = document.getElementById('nextExercise');

    // Rest timer
    DOM.restTimerModal = document.getElementById('restTimerModal');
    DOM.timerDisplay = document.getElementById('timerDisplay');
    DOM.timerProgress = document.getElementById('timerProgress');
    DOM.skipTimer = document.getElementById('skipTimer');

    // Workout complete
    DOM.workoutComplete = document.getElementById('workoutComplete');
    DOM.totalExercises = document.getElementById('totalExercises');
    DOM.totalSets = document.getElementById('totalSets');
    DOM.finishWorkout = document.getElementById('finishWorkout');

    // Settings
    DOM.notificationsToggle = document.getElementById('notificationsToggle');
    DOM.soundToggle = document.getElementById('soundToggle');
    DOM.vibrationToggle = document.getElementById('vibrationToggle');
    DOM.exportData = document.getElementById('exportData');
    DOM.importData = document.getElementById('importData');
    DOM.clearHistory = document.getElementById('clearHistory');
    DOM.resetApp = document.getElementById('resetApp');

    // Profile
    DOM.profileName = document.getElementById('profileName');
    DOM.totalWorkouts = document.getElementById('totalWorkouts');
    DOM.currentStreak = document.getElementById('currentStreak');
    DOM.bestStreak = document.getElementById('bestStreak');
    DOM.prList = document.getElementById('prList');
    DOM.historyList = document.getElementById('historyList');

    // Toast & Modal
    DOM.toast = document.getElementById('toast');
    DOM.toastMessage = document.getElementById('toastMessage');
    DOM.confirmModal = document.getElementById('confirmModal');
    DOM.modalTitle = document.getElementById('modalTitle');
    DOM.modalMessage = document.getElementById('modalMessage');
    DOM.modalCancel = document.getElementById('modalCancel');
    DOM.modalConfirm = document.getElementById('modalConfirm');
}

function setupEventListeners() {
    // Navigation
    DOM.navItems.forEach(item => {
        item.addEventListener('click', () => switchView(item.dataset.view));
    });

    // Back to programs
    DOM.backToPrograms.addEventListener('click', exitWorkout);

    // Exercise navigation
    DOM.prevExercise.addEventListener('click', previousExercise);
    DOM.nextExercise.addEventListener('click', nextExercise);

    // Skip timer
    DOM.skipTimer.addEventListener('click', skipRestTimer);

    // Finish workout
    DOM.finishWorkout.addEventListener('click', finishWorkout);

    // Settings toggles
    DOM.notificationsToggle.addEventListener('change', () => {
        AppState.settings.notifications = DOM.notificationsToggle.checked;
        saveSettings();
    });

    DOM.soundToggle.addEventListener('change', () => {
        AppState.settings.sound = DOM.soundToggle.checked;
        saveSettings();
    });

    DOM.vibrationToggle.addEventListener('change', () => {
        AppState.settings.vibration = DOM.vibrationToggle.checked;
        saveSettings();
    });

    // Settings buttons
    DOM.exportData.addEventListener('click', exportData);
    DOM.importData.addEventListener('click', importData);
    DOM.clearHistory.addEventListener('click', () => {
        showConfirmModal('Effacer l\'historique', 'Cette action supprimera tout ton historique d\'entraînement. Continuer ?', clearHistory);
    });
    DOM.resetApp.addEventListener('click', () => {
        showConfirmModal('Réinitialiser l\'application', 'Cette action supprimera toutes tes données. Continuer ?', resetApp);
    });

    // Modal
    DOM.modalCancel.addEventListener('click', hideConfirmModal);
}

// ========================================
// VIEW MANAGEMENT
// ========================================
function switchView(viewId) {
    // Update active nav item
    DOM.navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewId);
    });

    // Update active view
    DOM.views.forEach(view => {
        view.classList.toggle('active', view.id === viewId);
    });

    AppState.currentView = viewId;

    // Refresh profile data when switching to profile
    if (viewId === 'profil-view') {
        updateProfileStats();
    }
}

// ========================================
// DATE DISPLAY
// ========================================
function updateCurrentDate() {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const today = new Date().toLocaleDateString('fr-FR', options);
    DOM.currentDate.textContent = today.charAt(0).toUpperCase() + today.slice(1);
}

// ========================================
// PROGRAMS
// ========================================
function renderPrograms() {
    const allPrograms = getAllPrograms();

    DOM.programCards.innerHTML = allPrograms.map(program => `
        <div class="program-card ${program.isCustom ? 'custom' : ''}" data-program-id="${program.id}">
            ${program.isCustom ? `
                <button class="delete-program-btn" data-delete-id="${program.id}" onclick="event.stopPropagation(); deleteCustomWorkout('${program.id}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            ` : ''}
            <div class="program-card-header">
                <div class="program-icon">${program.icon}</div>
                <div>
                    <div class="program-title">${program.name}</div>
                    <div class="program-subtitle">${program.subtitle}</div>
                </div>
            </div>
            <div class="program-meta">
                <span class="program-meta-item">
                    <span>📋</span>
                    ${program.exercises.length} exercices
                </span>
                <span class="program-meta-item">
                    <span>⏱️</span>
                    ~${estimateWorkoutDuration(program)} min
                </span>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.program-card').forEach(card => {
        card.addEventListener('click', () => startProgram(card.dataset.programId));
    });
}

function estimateWorkoutDuration(program) {
    let totalSeconds = 0;
    program.exercises.forEach(ex => {
        // Time for sets + rest between sets
        const setTime = 45; // Average time per set in seconds
        totalSeconds += (ex.sets * setTime) + ((ex.sets - 1) * ex.restTime);
    });
    return Math.round(totalSeconds / 60);
}

function startProgram(programId) {
    const allPrograms = getAllPrograms();
    const program = allPrograms.find(p => p.id === programId);
    if (!program) return;

    AppState.currentProgram = program;
    AppState.currentExerciseIndex = 0;
    AppState.workoutLog = {};

    // Initialize log for all exercises
    program.exercises.forEach(ex => {
        AppState.workoutLog[ex.id] = Array(ex.sets).fill(null).map(() => ({
            weight: '',
            reps: '',
            completed: false
        }));
    });

    // Show workout container
    DOM.programSelector.classList.add('hidden');
    DOM.workoutContainer.classList.remove('hidden');
    DOM.workoutComplete.classList.add('hidden');

    // Render first exercise
    renderCurrentExercise();
}

function exitWorkout() {
    AppState.currentProgram = null;
    AppState.currentExerciseIndex = 0;
    AppState.workoutLog = {};

    DOM.workoutContainer.classList.add('hidden');
    DOM.workoutComplete.classList.add('hidden');
    DOM.programSelector.classList.remove('hidden');

    // Stop any running timer
    stopRestTimer();
}

// ========================================
// EXERCISE MANAGEMENT
// ========================================
function renderCurrentExercise() {
    const program = AppState.currentProgram;
    const exercise = program.exercises[AppState.currentExerciseIndex];

    // Update header
    DOM.currentProgramName.textContent = program.name;
    DOM.workoutProgress.textContent = `Exercice ${AppState.currentExerciseIndex + 1}/${program.exercises.length}`;

    // Update exercise card
    DOM.exerciseName.textContent = exercise.name;

    // Update muscles badge
    if (exercise.muscles) {
        DOM.exerciseMuscles.innerHTML = `<span class="muscle-badge">💪 ${exercise.muscles}</span>`;
        DOM.exerciseMuscles.style.display = 'block';
    } else {
        DOM.exerciseMuscles.style.display = 'none';
    }

    DOM.restTime.textContent = formatRestTime(exercise.restTime);
    DOM.setsCount.textContent = exercise.sets;
    DOM.repsCount.textContent = exercise.reps;
    DOM.exerciseInstructions.textContent = exercise.instructions;

    // Update media
    if (exercise.media) {
        DOM.exerciseMedia.innerHTML = `<img src="${exercise.media}" alt="${exercise.name}">`;
    } else {
        DOM.exerciseMedia.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
            </svg>
        `;
    }

    // Render log entries
    renderLogEntries(exercise);

    // Update navigation buttons
    DOM.prevExercise.disabled = AppState.currentExerciseIndex === 0;
    DOM.nextExercise.textContent = AppState.currentExerciseIndex === program.exercises.length - 1 ? 'Terminer' : 'Suivant';
}

function renderLogEntries(exercise) {
    const logData = AppState.workoutLog[exercise.id];

    // Find the current active set (first non-completed)
    const activeSetIndex = logData.findIndex(entry => !entry.completed);

    DOM.logEntries.innerHTML = logData.map((entry, index) => {
        const isActive = index === activeSetIndex;
        const isLocked = index > activeSetIndex && activeSetIndex !== -1;

        return `
        <div class="log-entry ${entry.completed ? 'completed' : ''} ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}" data-set="${index}">
            <div class="set-number">${index + 1}</div>
            <div class="log-input-group">
                <label>Poids (kg)</label>
                <input type="number" class="log-input weight-input" 
                       value="${entry.weight}" 
                       placeholder="0"
                       inputmode="decimal"
                       data-set="${index}"
                       ${isLocked ? 'disabled' : ''}
                       ${entry.completed ? 'readonly' : ''}>
            </div>
            <div class="log-input-group">
                <label>Reps</label>
                <input type="number" class="log-input reps-input" 
                       value="${entry.reps}" 
                       placeholder="0"
                       inputmode="numeric"
                       data-set="${index}"
                       ${isLocked ? 'disabled' : ''}
                       ${entry.completed ? 'readonly' : ''}>
            </div>
            <button class="check-btn ${entry.completed ? 'checked' : ''}" 
                    data-set="${index}"
                    ${isLocked ? 'disabled' : ''}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
            </button>
        </div>
        `;
    }).join('');

    // Add event listeners
    DOM.logEntries.querySelectorAll('.weight-input').forEach(input => {
        input.addEventListener('change', (e) => updateLogEntry(e, 'weight'));
        input.addEventListener('input', (e) => updateLogEntry(e, 'weight'));
    });

    DOM.logEntries.querySelectorAll('.reps-input').forEach(input => {
        input.addEventListener('change', (e) => updateLogEntry(e, 'reps'));
        input.addEventListener('input', (e) => updateLogEntry(e, 'reps'));
    });

    DOM.logEntries.querySelectorAll('.check-btn').forEach(btn => {
        btn.addEventListener('click', (e) => toggleSetComplete(e));
    });

    // Update progress indicator
    updateSetProgress(exercise);
}

function updateSetProgress(exercise) {
    const logData = AppState.workoutLog[exercise.id];
    const completedSets = logData.filter(entry => entry.completed).length;
    const totalSets = logData.length;

    // Update the sets count display to show progress
    if (DOM.setsCount) {
        DOM.setsCount.innerHTML = `<span class="sets-progress">${completedSets}</span>/${totalSets}`;
    }
}

function updateLogEntry(e, field) {
    const setIndex = parseInt(e.target.dataset.set);
    const exercise = AppState.currentProgram.exercises[AppState.currentExerciseIndex];

    AppState.workoutLog[exercise.id][setIndex][field] = e.target.value;
    saveCurrentLog();

    // Update validation state of check button
    updateCheckButtonState(setIndex);
}

function updateCheckButtonState(setIndex) {
    const exercise = AppState.currentProgram.exercises[AppState.currentExerciseIndex];
    const entry = AppState.workoutLog[exercise.id][setIndex];
    const checkBtn = DOM.logEntries.querySelector(`.check-btn[data-set="${setIndex}"]`);

    if (checkBtn) {
        const isValid = entry.weight && parseFloat(entry.weight) > 0 && entry.reps && parseInt(entry.reps) > 0;
        checkBtn.classList.toggle('ready', isValid && !entry.completed);
    }
}

function toggleSetComplete(e) {
    const setIndex = parseInt(e.currentTarget.dataset.set);
    const exercise = AppState.currentProgram.exercises[AppState.currentExerciseIndex];
    const entry = AppState.workoutLog[exercise.id][setIndex];
    const logData = AppState.workoutLog[exercise.id];

    // Check if this is the active set (first non-completed)
    const activeSetIndex = logData.findIndex(ent => !ent.completed);
    if (setIndex !== activeSetIndex && !entry.completed) {
        showToast('⚠️ Complète les séries dans l\'ordre !');
        return;
    }

    // If trying to complete, validate weight and reps are entered
    if (!entry.completed) {
        if (!entry.weight || parseFloat(entry.weight) <= 0) {
            showToast('⚠️ Entre le poids utilisé !');
            const weightInput = DOM.logEntries.querySelector(`.weight-input[data-set="${setIndex}"]`);
            if (weightInput) weightInput.focus();
            return;
        }
        if (!entry.reps || parseInt(entry.reps) <= 0) {
            showToast('⚠️ Entre le nombre de reps !');
            const repsInput = DOM.logEntries.querySelector(`.reps-input[data-set="${setIndex}"]`);
            if (repsInput) repsInput.focus();
            return;
        }
    }

    entry.completed = !entry.completed;

    saveCurrentLog();

    // Re-render log entries to update locked/active states
    renderLogEntries(exercise);

    // Vibrate feedback
    if (entry.completed && AppState.settings.vibration && 'vibrate' in navigator) {
        navigator.vibrate(50);
    }

    // Check if all sets are completed
    const allSetsCompleted = logData.every(ent => ent.completed);

    if (allSetsCompleted) {
        // All sets done - auto move to next exercise after a short delay
        showToast('✅ Exercice terminé !');

        setTimeout(() => {
            const program = AppState.currentProgram;
            if (AppState.currentExerciseIndex < program.exercises.length - 1) {
                // Move to next exercise
                AppState.currentExerciseIndex++;
                renderCurrentExercise();
                showToast(`🏋️ ${program.exercises[AppState.currentExerciseIndex].name}`);
            } else {
                // Workout complete
                completeWorkout();
            }
        }, 1500);
    } else if (entry.completed) {
        // Start rest timer for next set
        const isLastSet = setIndex === logData.length - 1;
        if (!isLastSet) {
            startRestTimer(exercise.restTime);
        }
    }
}

// Helper function to format rest time in minutes
function formatRestTime(seconds) {
    if (seconds >= 60) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        if (remainingSeconds === 0) {
            return `${minutes} min`;
        } else {
            return `${minutes}m${remainingSeconds}s`;
        }
    }
    return `${seconds}s`;
}

// ========================================
// REST TIMER
// ========================================
function startRestTimer(duration) {
    AppState.timerRemaining = duration;
    updateTimerDisplay();

    DOM.restTimerModal.classList.remove('hidden');

    const circumference = 283; // 2 * PI * 45
    DOM.timerProgress.style.strokeDashoffset = 0;

    AppState.timerInterval = setInterval(() => {
        AppState.timerRemaining--;
        updateTimerDisplay();

        // Update progress circle
        const progress = (duration - AppState.timerRemaining) / duration;
        DOM.timerProgress.style.strokeDashoffset = circumference * progress;

        if (AppState.timerRemaining <= 0) {
            stopRestTimer();
            onTimerComplete();
        }
    }, 1000);
}

function updateTimerDisplay() {
    DOM.timerDisplay.textContent = AppState.timerRemaining;
}

function stopRestTimer() {
    if (AppState.timerInterval) {
        clearInterval(AppState.timerInterval);
        AppState.timerInterval = null;
    }
    DOM.restTimerModal.classList.add('hidden');
}

function skipRestTimer() {
    stopRestTimer();
}

function onTimerComplete() {
    // Play sound if enabled
    if (AppState.settings.sound) {
        playBeep();
    }

    // Vibrate if enabled
    if (AppState.settings.vibration && 'vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
    }

    showToast('Temps de repos terminé ! 💪');
}

function playBeep() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 880;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Audio not supported');
    }
}

// ========================================
// NAVIGATION
// ========================================
function previousExercise() {
    if (AppState.currentExerciseIndex > 0) {
        AppState.currentExerciseIndex--;
        renderCurrentExercise();
    }
}

function nextExercise() {
    const program = AppState.currentProgram;

    if (AppState.currentExerciseIndex < program.exercises.length - 1) {
        AppState.currentExerciseIndex++;
        renderCurrentExercise();
    } else {
        // Complete workout
        completeWorkout();
    }
}

function completeWorkout() {
    stopRestTimer();

    // Calculate stats
    let totalSets = 0;
    Object.values(AppState.workoutLog).forEach(sets => {
        totalSets += sets.filter(s => s.completed).length;
    });

    // Update complete screen
    DOM.totalExercises.textContent = AppState.currentProgram.exercises.length;
    DOM.totalSets.textContent = totalSets;

    // Save to history
    saveWorkoutToHistory();

    // Show complete screen
    DOM.workoutContainer.classList.add('hidden');
    DOM.workoutComplete.classList.remove('hidden');
}

function finishWorkout() {
    exitWorkout();
    updateProfileStats();
}

// ========================================
// DATA PERSISTENCE
// ========================================
function loadSettings() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        if (saved) {
            AppState.settings = { ...AppState.settings, ...JSON.parse(saved) };
        }
    } catch (e) {
        console.error('Error loading settings:', e);
    }

    // Apply to UI
    DOM.notificationsToggle.checked = AppState.settings.notifications;
    DOM.soundToggle.checked = AppState.settings.sound;
    DOM.vibrationToggle.checked = AppState.settings.vibration;
}

function saveSettings() {
    try {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(AppState.settings));
    } catch (e) {
        console.error('Error saving settings:', e);
    }
}

function saveCurrentLog() {
    try {
        localStorage.setItem(STORAGE_KEYS.CURRENT_LOG, JSON.stringify({
            programId: AppState.currentProgram?.id,
            exerciseIndex: AppState.currentExerciseIndex,
            log: AppState.workoutLog
        }));
    } catch (e) {
        console.error('Error saving log:', e);
    }
}

function saveWorkoutToHistory() {
    try {
        const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.WORKOUT_HISTORY) || '[]');

        const workout = {
            id: Date.now(),
            date: new Date().toISOString(),
            programId: AppState.currentProgram.id,
            programName: AppState.currentProgram.name,
            log: AppState.workoutLog
        };

        history.unshift(workout);

        // Keep only last 50 workouts
        if (history.length > 50) {
            history.pop();
        }

        localStorage.setItem(STORAGE_KEYS.WORKOUT_HISTORY, JSON.stringify(history));

        // Update PRs
        updatePersonalRecords(workout);

        // Clear current log
        localStorage.removeItem(STORAGE_KEYS.CURRENT_LOG);

    } catch (e) {
        console.error('Error saving workout:', e);
    }
}

function updatePersonalRecords(workout) {
    try {
        const prs = JSON.parse(localStorage.getItem(STORAGE_KEYS.PERSONAL_RECORDS) || '{}');

        Object.entries(workout.log).forEach(([exerciseId, sets]) => {
            sets.forEach(set => {
                if (set.completed && set.weight && set.reps) {
                    const weight = parseFloat(set.weight);
                    const reps = parseInt(set.reps);

                    if (!prs[exerciseId] || weight > prs[exerciseId].weight) {
                        // Find exercise name
                        let exerciseName = exerciseId;
                        TRAINING_PROGRAMS.forEach(p => {
                            const ex = p.exercises.find(e => e.id === exerciseId);
                            if (ex) exerciseName = ex.name;
                        });

                        prs[exerciseId] = {
                            name: exerciseName,
                            weight: weight,
                            reps: reps,
                            date: new Date().toISOString()
                        };
                    }
                }
            });
        });

        localStorage.setItem(STORAGE_KEYS.PERSONAL_RECORDS, JSON.stringify(prs));
    } catch (e) {
        console.error('Error updating PRs:', e);
    }
}

// ========================================
// PROFILE
// ========================================
function updateProfileStats() {
    try {
        const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.WORKOUT_HISTORY) || '[]');
        const prs = JSON.parse(localStorage.getItem(STORAGE_KEYS.PERSONAL_RECORDS) || '{}');

        // Total workouts
        DOM.totalWorkouts.textContent = history.length;

        // Calculate streak
        const streaks = calculateStreak(history);
        DOM.currentStreak.textContent = streaks.current;
        DOM.bestStreak.textContent = streaks.best;

        // Render PRs
        renderPRs(prs);

        // Render history
        renderHistory(history.slice(0, 10));

    } catch (e) {
        console.error('Error updating profile:', e);
    }
}

function calculateStreak(history) {
    if (history.length === 0) return { current: 0, best: 0 };

    let currentStreak = 0;
    let bestStreak = 0;
    let lastDate = null;

    const sortedDates = history
        .map(w => new Date(w.date).toDateString())
        .filter((date, index, self) => self.indexOf(date) === index);

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (sortedDates[0] === today || sortedDates[0] === yesterday) {
        currentStreak = 1;

        for (let i = 1; i < sortedDates.length; i++) {
            const prev = new Date(sortedDates[i - 1]);
            const curr = new Date(sortedDates[i]);
            const diff = (prev - curr) / 86400000;

            if (diff === 1) {
                currentStreak++;
            } else {
                break;
            }
        }
    }

    // Calculate best streak
    let tempStreak = 1;
    for (let i = 1; i < sortedDates.length; i++) {
        const prev = new Date(sortedDates[i - 1]);
        const curr = new Date(sortedDates[i]);
        const diff = (prev - curr) / 86400000;

        if (diff === 1) {
            tempStreak++;
        } else {
            bestStreak = Math.max(bestStreak, tempStreak);
            tempStreak = 1;
        }
    }
    bestStreak = Math.max(bestStreak, tempStreak, currentStreak);

    return { current: currentStreak, best: bestStreak };
}

function renderPRs(prs) {
    const prsArray = Object.values(prs);

    if (prsArray.length === 0) {
        DOM.prList.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🎯</span>
                <p>Tes records apparaîtront ici</p>
            </div>
        `;
        return;
    }

    DOM.prList.innerHTML = prsArray.map(pr => `
        <div class="pr-item">
            <span class="pr-exercise">${pr.name}</span>
            <span class="pr-value">${pr.weight}kg × ${pr.reps}</span>
        </div>
    `).join('');
}

function renderHistory(history) {
    if (history.length === 0) {
        DOM.historyList.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📝</span>
                <p>Ton historique apparaîtra ici</p>
            </div>
        `;
        return;
    }

    DOM.historyList.innerHTML = history.map(workout => {
        const date = new Date(workout.date);
        const formattedDate = date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Count completed sets
        let completedSets = 0;
        let totalSets = 0;
        if (workout.log) {
            Object.values(workout.log).forEach(sets => {
                totalSets += sets.length;
                completedSets += sets.filter(s => s.completed).length;
            });
        }

        return `
            <div class="history-item" data-workout-id="${workout.id}">
                <div class="history-info">
                    <span class="history-workout">${workout.programName}</span>
                    <span class="history-sets">${completedSets}/${totalSets} séries</span>
                </div>
                <span class="history-date">${formattedDate}</span>
            </div>
        `;
    }).join('');
}

// Setup history click handler (called once on init)
function setupHistoryClickHandler() {
    DOM.historyList.addEventListener('click', (e) => {
        const historyItem = e.target.closest('.history-item');
        if (historyItem) {
            const workoutId = parseInt(historyItem.dataset.workoutId);
            if (workoutId) {
                openWorkoutDetail(workoutId);
            }
        }
    });
}

// ========================================
// SETTINGS ACTIONS
// ========================================
function exportData() {
    try {
        const data = {
            settings: AppState.settings,
            history: JSON.parse(localStorage.getItem(STORAGE_KEYS.WORKOUT_HISTORY) || '[]'),
            prs: JSON.parse(localStorage.getItem(STORAGE_KEYS.PERSONAL_RECORDS) || '{}')
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `jg-fitness-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();

        URL.revokeObjectURL(url);
        showToast('Données exportées ✅');
    } catch (e) {
        showToast('Erreur lors de l\'export');
    }
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);

                if (data.settings) {
                    AppState.settings = data.settings;
                    saveSettings();
                    loadSettings();
                }

                if (data.history) {
                    localStorage.setItem(STORAGE_KEYS.WORKOUT_HISTORY, JSON.stringify(data.history));
                }

                if (data.prs) {
                    localStorage.setItem(STORAGE_KEYS.PERSONAL_RECORDS, JSON.stringify(data.prs));
                }

                updateProfileStats();
                showToast('Données importées ✅');
            } catch (e) {
                showToast('Fichier invalide');
            }
        };

        reader.readAsText(file);
    };

    input.click();
}

function clearHistory() {
    localStorage.removeItem(STORAGE_KEYS.WORKOUT_HISTORY);
    localStorage.removeItem(STORAGE_KEYS.PERSONAL_RECORDS);
    updateProfileStats();
    showToast('Historique effacé');
}

function resetApp() {
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.WORKOUT_HISTORY);
    localStorage.removeItem(STORAGE_KEYS.PERSONAL_RECORDS);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_LOG);

    // Reset state
    AppState.settings = {
        notifications: false,
        sound: true,
        vibration: true
    };

    loadSettings();
    updateProfileStats();
    showToast('Application réinitialisée');
}

// ========================================
// UI HELPERS
// ========================================
function showToast(message) {
    DOM.toastMessage.textContent = message;
    DOM.toast.classList.remove('hidden');
    DOM.toast.classList.add('show');

    setTimeout(() => {
        DOM.toast.classList.remove('show');
        setTimeout(() => DOM.toast.classList.add('hidden'), 300);
    }, 3000);
}

let modalCallback = null;

function showConfirmModal(title, message, callback) {
    DOM.modalTitle.textContent = title;
    DOM.modalMessage.textContent = message;
    modalCallback = callback;

    // Remove old onclick and add new one
    DOM.modalConfirm.onclick = () => {
        if (modalCallback) {
            modalCallback();
        }
        hideConfirmModal();
    };

    DOM.confirmModal.classList.remove('hidden');
}

function hideConfirmModal() {
    DOM.confirmModal.classList.add('hidden');
    modalCallback = null;
}

// ========================================
// WORKOUT DETAIL MODAL
// ========================================
let currentDetailWorkout = null;

function openWorkoutDetail(workoutId) {
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.WORKOUT_HISTORY) || '[]');
    const workout = history.find(w => w.id === workoutId);

    if (!workout) {
        showToast('Séance introuvable');
        return;
    }

    currentDetailWorkout = workout;

    // Format date
    const date = new Date(workout.date);
    const formattedDate = date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Update modal content
    document.getElementById('workoutDetailDate').textContent = formattedDate;
    document.getElementById('workoutDetailProgram').textContent = workout.programName;

    // Render exercises
    const exercisesHtml = Object.entries(workout.log).map(([exerciseId, sets]) => {
        // Find exercise name
        let exerciseName = exerciseId;
        TRAINING_PROGRAMS.forEach(p => {
            const ex = p.exercises.find(e => e.id === exerciseId);
            if (ex) exerciseName = ex.name;
        });

        const setsHtml = sets.map((set, index) => {
            const isCompleted = set.completed;
            const weight = set.weight || '-';
            const reps = set.reps || '-';
            return `<span class="workout-set-tag ${isCompleted ? 'completed' : ''}">${index + 1}: ${weight}kg × ${reps}</span>`;
        }).join('');

        return `
            <div class="workout-exercise-item">
                <div class="workout-exercise-name">${exerciseName}</div>
                <div class="workout-exercise-sets">${setsHtml}</div>
            </div>
        `;
    }).join('');

    document.getElementById('workoutDetailExercises').innerHTML = exercisesHtml;

    // Show modal
    document.getElementById('workoutDetailModal').classList.remove('hidden');
}

function closeWorkoutDetail() {
    document.getElementById('workoutDetailModal').classList.add('hidden');
    currentDetailWorkout = null;
}

function exportWorkoutAsText() {
    if (!currentDetailWorkout) return;

    const workout = currentDetailWorkout;
    const date = new Date(workout.date);
    const formattedDate = date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    let text = `JG FITNESS - Séance du ${formattedDate}\n`;
    text += `Programme: ${workout.programName}\n`;
    text += `${'='.repeat(40)}\n\n`;

    Object.entries(workout.log).forEach(([exerciseId, sets]) => {
        // Find exercise name
        let exerciseName = exerciseId;
        TRAINING_PROGRAMS.forEach(p => {
            const ex = p.exercises.find(e => e.id === exerciseId);
            if (ex) exerciseName = ex.name;
        });

        text += `📍 ${exerciseName}\n`;
        sets.forEach((set, index) => {
            const status = set.completed ? '✓' : '○';
            const weight = set.weight || '-';
            const reps = set.reps || '-';
            text += `   ${status} Série ${index + 1}: ${weight}kg × ${reps} reps\n`;
        });
        text += '\n';
    });

    // Download file
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seance-${date.toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Séance exportée en texte ✅');
}

function exportWorkoutAsPdf() {
    if (!currentDetailWorkout) return;

    const workout = currentDetailWorkout;
    const date = new Date(workout.date);
    const formattedDate = date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Create printable HTML
    let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Séance - ${formattedDate}</title>
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; }
                h1 { color: #8b5cf6; margin-bottom: 5px; }
                .date { color: #666; margin-bottom: 30px; }
                .exercise { background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
                .exercise-name { font-weight: 600; color: #8b5cf6; margin-bottom: 10px; }
                .sets { display: flex; flex-wrap: wrap; gap: 8px; }
                .set { background: white; padding: 5px 12px; border-radius: 15px; font-size: 13px; }
                .set.completed { background: #dcfce7; color: #166534; }
            </style>
        </head>
        <body>
            <h1>💪 JG Fitness</h1>
            <p class="date">${formattedDate} - ${workout.programName}</p>
    `;

    Object.entries(workout.log).forEach(([exerciseId, sets]) => {
        let exerciseName = exerciseId;
        TRAINING_PROGRAMS.forEach(p => {
            const ex = p.exercises.find(e => e.id === exerciseId);
            if (ex) exerciseName = ex.name;
        });

        html += `<div class="exercise"><div class="exercise-name">${exerciseName}</div><div class="sets">`;
        sets.forEach((set, index) => {
            const weight = set.weight || '-';
            const reps = set.reps || '-';
            html += `<span class="set ${set.completed ? 'completed' : ''}">S${index + 1}: ${weight}kg × ${reps}</span>`;
        });
        html += `</div></div>`;
    });

    html += `</body></html>`;

    // Open print dialog
    const printWindow = window.open('', '_blank');
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => {
        printWindow.print();
    };

    showToast('Ouverture de l\'impression PDF 📄');
}

function deleteWorkout() {
    if (!currentDetailWorkout) return;

    showConfirmModal(
        'Supprimer la séance',
        'Es-tu sûr de vouloir supprimer cette séance ? Cette action est irréversible.',
        () => {
            const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.WORKOUT_HISTORY) || '[]');
            const newHistory = history.filter(w => w.id !== currentDetailWorkout.id);
            localStorage.setItem(STORAGE_KEYS.WORKOUT_HISTORY, JSON.stringify(newHistory));

            closeWorkoutDetail();
            updateProfileStats();
            showToast('Séance supprimée 🗑️');
        }
    );
}

// Setup workout detail modal event listeners
function setupWorkoutDetailListeners() {
    const closeBtn = document.getElementById('closeWorkoutDetail');
    const exportTxtBtn = document.getElementById('exportWorkoutTxt');
    const exportPdfBtn = document.getElementById('exportWorkoutPdf');
    const deleteBtn = document.getElementById('deleteWorkoutBtn');
    const modal = document.getElementById('workoutDetailModal');

    if (closeBtn) closeBtn.addEventListener('click', closeWorkoutDetail);
    if (exportTxtBtn) exportTxtBtn.addEventListener('click', exportWorkoutAsText);
    if (exportPdfBtn) exportPdfBtn.addEventListener('click', exportWorkoutAsPdf);
    if (deleteBtn) deleteBtn.addEventListener('click', deleteWorkout);

    // Close on background click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeWorkoutDetail();
        });
    }
}

// ========================================
// CUSTOM WORKOUT CREATION
// ========================================
let newWorkoutExercises = [];
let selectedIcon = '🏋️';

function openCreateWorkoutModal() {
    newWorkoutExercises = [];
    selectedIcon = '🏋️';
    document.getElementById('workoutName').value = '';
    renderNewExercisesList();

    // Reset icon selection
    document.querySelectorAll('.icon-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.icon === selectedIcon);
    });

    document.getElementById('createWorkoutModal').classList.remove('hidden');
}

function closeCreateWorkoutModal() {
    document.getElementById('createWorkoutModal').classList.add('hidden');
    newWorkoutExercises = [];
}

function openAddExerciseModal() {
    // Reset form
    document.getElementById('newExerciseName').value = '';
    document.getElementById('newExerciseMuscles').value = '';
    document.getElementById('newExerciseSets').value = '4';
    document.getElementById('newExerciseReps').value = '8-12';
    document.getElementById('newExerciseRest').value = '90';
    document.getElementById('newExerciseInstructions').value = '';

    document.getElementById('addExerciseModal').classList.remove('hidden');
}

function closeAddExerciseModal() {
    document.getElementById('addExerciseModal').classList.add('hidden');
}

function addExerciseToList() {
    const name = document.getElementById('newExerciseName').value.trim();
    const muscles = document.getElementById('newExerciseMuscles').value.trim();
    const sets = parseInt(document.getElementById('newExerciseSets').value) || 4;
    const reps = document.getElementById('newExerciseReps').value.trim() || '8-12';
    const restTime = parseInt(document.getElementById('newExerciseRest').value) || 90;
    const instructions = document.getElementById('newExerciseInstructions').value.trim();

    if (!name) {
        showToast('⚠️ Entre le nom de l\'exercice');
        return;
    }

    const exercise = {
        id: 'custom_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        name: name,
        muscles: muscles || 'Non spécifié',
        sets: sets,
        reps: reps,
        restTime: restTime,
        instructions: instructions || 'Aucune instruction',
        media: null
    };

    newWorkoutExercises.push(exercise);
    renderNewExercisesList();
    closeAddExerciseModal();
    showToast(`✅ ${name} ajouté`);
}

function removeExerciseFromList(index) {
    newWorkoutExercises.splice(index, 1);
    renderNewExercisesList();
}

function renderNewExercisesList() {
    const container = document.getElementById('newExercisesList');

    if (newWorkoutExercises.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: var(--spacing-md);">Aucun exercice ajouté</p>';
        return;
    }

    container.innerHTML = newWorkoutExercises.map((ex, index) => `
        <div class="exercise-item-preview">
            <div class="exercise-item-info">
                <span class="exercise-item-name">${ex.name}</span>
                <span class="exercise-item-details">${ex.sets} séries × ${ex.reps} | Repos ${formatRestTime(ex.restTime)}</span>
            </div>
            <button class="remove-exercise-btn" data-index="${index}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `).join('');

    // Add remove handlers
    container.querySelectorAll('.remove-exercise-btn').forEach(btn => {
        btn.addEventListener('click', () => removeExerciseFromList(parseInt(btn.dataset.index)));
    });
}

function saveNewWorkout() {
    const name = document.getElementById('workoutName').value.trim();

    if (!name) {
        showToast('⚠️ Entre le nom de la séance');
        document.getElementById('workoutName').focus();
        return;
    }

    if (newWorkoutExercises.length === 0) {
        showToast('⚠️ Ajoute au moins un exercice');
        return;
    }

    const workout = {
        id: 'custom_' + Date.now(),
        name: name,
        subtitle: 'Séance personnalisée',
        icon: selectedIcon,
        exercises: newWorkoutExercises,
        isCustom: true
    };

    // Save to localStorage
    const customWorkouts = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_WORKOUTS) || '[]');
    customWorkouts.push(workout);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_WORKOUTS, JSON.stringify(customWorkouts));

    // Re-render programs
    renderPrograms();
    closeCreateWorkoutModal();
    showToast('✅ Séance créée !');
}

function deleteCustomWorkout(workoutId) {
    showConfirmModal(
        'Supprimer la séance',
        'Es-tu sûr de vouloir supprimer cette séance personnalisée ?',
        () => {
            const customWorkouts = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_WORKOUTS) || '[]');
            const newWorkouts = customWorkouts.filter(w => w.id !== workoutId);
            localStorage.setItem(STORAGE_KEYS.CUSTOM_WORKOUTS, JSON.stringify(newWorkouts));
            renderPrograms();
            showToast('Séance supprimée 🗑️');
        }
    );
}

function getAllPrograms() {
    const customWorkouts = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_WORKOUTS) || '[]');
    return [...TRAINING_PROGRAMS, ...customWorkouts];
}

function setupCreateWorkoutListeners() {
    // Open create workout modal
    const addBtn = document.getElementById('addWorkoutBtn');
    if (addBtn) addBtn.addEventListener('click', openCreateWorkoutModal);

    // Close create workout modal
    const closeBtn = document.getElementById('closeCreateWorkout');
    if (closeBtn) closeBtn.addEventListener('click', closeCreateWorkoutModal);

    const cancelBtn = document.getElementById('cancelCreateWorkout');
    if (cancelBtn) cancelBtn.addEventListener('click', closeCreateWorkoutModal);

    // Save workout
    const saveBtn = document.getElementById('saveNewWorkout');
    if (saveBtn) saveBtn.addEventListener('click', saveNewWorkout);

    // Add exercise button
    const addExBtn = document.getElementById('addExerciseBtn');
    if (addExBtn) addExBtn.addEventListener('click', openAddExerciseModal);

    // Close add exercise modal
    const closeAddBtn = document.getElementById('closeAddExercise');
    if (closeAddBtn) closeAddBtn.addEventListener('click', closeAddExerciseModal);

    const cancelAddBtn = document.getElementById('cancelAddExercise');
    if (cancelAddBtn) cancelAddBtn.addEventListener('click', closeAddExerciseModal);

    // Confirm add exercise
    const confirmAddBtn = document.getElementById('confirmAddExercise');
    if (confirmAddBtn) confirmAddBtn.addEventListener('click', addExerciseToList);

    // Icon selection
    document.querySelectorAll('.icon-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.icon-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedIcon = opt.dataset.icon;
        });
    });

    // Close modals on background click
    const createModal = document.getElementById('createWorkoutModal');
    if (createModal) {
        createModal.addEventListener('click', (e) => {
            if (e.target === createModal) closeCreateWorkoutModal();
        });
    }

    const addExModal = document.getElementById('addExerciseModal');
    if (addExModal) {
        addExModal.addEventListener('click', (e) => {
            if (e.target === addExModal) closeAddExerciseModal();
        });
    }
}

// ========================================
// START APP
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    init();
    setupWorkoutDetailListeners();
    setupHistoryClickHandler();
    setupCreateWorkoutListeners();
});
