/**
 * FitMeal - Meal Planner JavaScript
 * =================================
 * This file contains functionality specifically for the meal planner feature
 * Created as part of the Web Development Course Project
 */

// Mock data for meal options (in a real app, this would come from a server)
const mealOptions = {
    breakfast: [
        {
            id: 'b1',
            name: 'שייק חלבון עם פירות',
            calories: 350,
            protein: 25,
            carbs: 40,
            fat: 8,
            ingredients: [
                '1 כוס חלב שקדים',
                '1 כף אבקת חלבון',
                '1 בננה',
                '1/2 כוס תותים',
                '1 כף שקדים טחונים'
            ],
            image: '../assets/images/protein-shake.jpg',
            dietaryRestrictions: ['vegetarian']
        },
        {
            id: 'b2',
            name: 'אומלט ירקות עם טוסט מחיטה מלאה',
            calories: 400,
            protein: 22,
            carbs: 30,
            fat: 20,
            ingredients: [
                '3 ביצים',
                '1/4 כוס פלפל קלוי',
                '1/4 כוס פטריות',
                '2 פרוסות לחם מחיטה מלאה',
                '1 כף שמן זית'
            ],
            image: '../assets/images/veggie-omelette.jpg',
            dietaryRestrictions: ['vegetarian']
        },
        {
            id: 'b3',
            name: 'דייסת שיבולת שועל עם פירות יער ואגוזים',
            calories: 320,
            protein: 12,
            carbs: 45,
            fat: 10,
            ingredients: [
                '1/2 כוס שיבולת שועל',
                '1 כוס חלב סויה',
                '1/4 כוס פירות יער מעורבים',
                '1 כף דבש',
                '1 כף אגוזי מלך קצוצים'
            ],
            image: '../assets/images/oatmeal.jpg',
            dietaryRestrictions: ['vegetarian', 'vegan']
        }
    ],
    lunch: [
        {
            id: 'l1',
            name: 'סלט עוף עם קינואה וירקות',
            calories: 450,
            protein: 35,
            carbs: 40,
            fat: 15,
            ingredients: [
                '100 גרם חזה עוף צלוי',
                '1/2 כוס קינואה מבושלת',
                '1 כוס עלי חסה מעורבים',
                '1/2 כוס עגבניות שרי',
                '1/4 כוס מלפפון חתוך',
                '1 כף שמן זית',
                '1/2 לימון סחוט'
            ],
            image: '../assets/images/chicken-quinoa-salad.jpg',
            dietaryRestrictions: []
        },
        {
            id: 'l2',
            name: 'קציצות טופו וירקות עם אורז מלא',
            calories: 420,
            protein: 20,
            carbs: 50,
            fat: 15,
            ingredients: [
                '150 גרם טופו',
                '1/2 כוס ירקות קצוצים',
                '1/2 כוס אורז מלא מבושל',
                '1 כף רוטב סויה',
                '1 כף שמן קוקוס'
            ],
            image: '../assets/images/tofu-veggie-balls.jpg',
            dietaryRestrictions: ['vegetarian', 'vegan']
        },
        {
            id: 'l3',
            name: 'כריך טונה עם אבוקדו וביצה',
            calories: 480,
            protein: 30,
            carbs: 35,
            fat: 25,
            ingredients: [
                '70 גרם טונה בשמן זית',
                '1/2 אבוקדו',
                '1 ביצה קשה',
                '2 פרוסות לחם שיפון',
                'עלי חסה',
                'פרוסות עגבנייה'
            ],
            image: '../assets/images/tuna-avocado-sandwich.jpg',
            dietaryRestrictions: []
        }
    ],
    dinner: [
        {
            id: 'd1',
            name: 'פילה סלמון עם בטטה וברוקולי',
            calories: 520,
            protein: 35,
            carbs: 40,
            fat: 25,
            ingredients: [
                '150 גרם פילה סלמון',
                '1 בטטה בינונית אפויה',
                '1 כוס ברוקולי מאודה',
                '1 כף שמן זית',
                '1/2 לימון',
                'תבלינים לפי טעם'
            ],
            image: '../assets/images/salmon-sweet-potato.jpg',
            dietaryRestrictions: []
        },
        {
            id: 'd2',
            name: 'קערת טופו וירקות מוקפצים עם נודלס',
            calories: 450,
            protein: 20,
            carbs: 55,
            fat: 15,
            ingredients: [
                '100 גרם טופו',
                '1 כוס ירקות מעורבים',
                '100 גרם נודלס מחיטה מלאה',
                '1 כף רוטב סויה מופחת נתרן',
                '1 כף שמן שומשום'
            ],
            image: '../assets/images/tofu-stir-fry.jpg',
            dietaryRestrictions: ['vegetarian', 'vegan']
        },
        {
            id: 'd3',
            name: 'חזה עוף צלוי עם תפוח אדמה וסלט',
            calories: 480,
            protein: 40,
            carbs: 35,
            fat: 18,
            ingredients: [
                '150 גרם חזה עוף',
                '1 תפוח אדמה בינוני אפוי',
                '2 כוסות סלט ירקות מעורב',
                '1 כף שמן זית',
                'תבלינים לפי טעם'
            ],
            image: '../assets/images/grilled-chicken-potato.jpg',
            dietaryRestrictions: []
        }
    ],
    snacks: [
        {
            id: 's1',
            name: 'יוגורט יווני עם פירות ואגוזים',
            calories: 220,
            protein: 15,
            carbs: 20,
            fat: 8,
            ingredients: [
                '150 גרם יוגורט יווני',
                '1/2 כוס פירות טריים מעורבים',
                '1 כף אגוזים קצוצים',
                '1 כפית דבש'
            ],
            image: '../assets/images/greek-yogurt.jpg',
            dietaryRestrictions: ['vegetarian']
        },
        {
            id: 's2',
            name: 'חטיף חלבון ביתי',
            calories: 180,
            protein: 12,
            carbs: 15,
            fat: 7,
            ingredients: [
                '1/4 כוס שקדים',
                '1/4 כוס חמוציות',
                '1 כף אבקת חלבון',
                '1 כף דבש',
                '1 כף חמאת שקדים'
            ],
            image: '../assets/images/protein-bar.jpg',
            dietaryRestrictions: ['vegetarian']
        },
        {
            id: 's3',
            name: 'עמבה טחינה עם מקלות ירקות',
            calories: 150,
            protein: 5,
            carbs: 10,
            fat: 10,
            ingredients: [
                '2 כפות טחינה גולמית',
                '1/2 כוס מקלות גזר',
                '1/2 כוס מקלות מלפפון',
                '1/2 כוס מקלות פלפל'
            ],
            image: '../assets/images/hummus-veggies.jpg',
            dietaryRestrictions: ['vegetarian', 'vegan']
        }
    ]
};

/**
 * Calculate daily caloric needs based on user data
 * This is a simplified version of the Harris-Benedict equation
 * @param {object} userData - User data object
 * @returns {number} - Estimated daily caloric needs
 */
function calculateCalories(userData) {
    // Base Metabolic Rate (BMR) calculation
    let bmr = 0;
    
    if (userData.gender === 'male') {
        bmr = 88.362 + (13.397 * userData.weight) + (4.799 * userData.height) - (5.677 * userData.age);
    } else {
        bmr = 447.593 + (9.247 * userData.weight) + (3.098 * userData.height) - (4.330 * userData.age);
    }
    
    // Activity multiplier
    const activityMultipliers = {
        sedentary: 1.2,      // Little or no exercise
        light: 1.375,         // Light exercise 1-3 days per week
        moderate: 1.55,       // Moderate exercise 3-5 days per week
        active: 1.725,        // Hard exercise 6-7 days per week
        veryActive: 1.9       // Very hard exercise, physical job or training twice a day
    };
    
    const multiplier = activityMultipliers[userData.activityLevel] || activityMultipliers.moderate;
    let maintenanceCalories = bmr * multiplier;
    
    // Adjust based on goal
    switch (userData.goal) {
        case 'lose':
            return Math.round(maintenanceCalories * 0.85); // 15% deficit
        case 'maintain':
            return Math.round(maintenanceCalories);
        case 'gain':
            return Math.round(maintenanceCalories * 1.15); // 15% surplus
        default:
            return Math.round(maintenanceCalories);
    }
}

/**
 * Generate a meal plan based on user data
 * @param {object} userData - User data including preferences
 * @returns {object} - Generated meal plan
 */
function generateMealPlan(userData) {
    // Calculate daily caloric needs
    const dailyCalories = calculateCalories(userData);
    
    // Calculate macros based on goal
    let proteinPercentage, carbPercentage, fatPercentage;
    
    switch (userData.goal) {
        case 'lose':
            proteinPercentage = 0.35; // 35% protein
            carbPercentage = 0.40;    // 40% carbs
            fatPercentage = 0.25;     // 25% fat
            break;
        case 'maintain':
            proteinPercentage = 0.30; // 30% protein
            carbPercentage = 0.45;    // 45% carbs
            fatPercentage = 0.25;     // 25% fat
            break;
        case 'gain':
            proteinPercentage = 0.25; // 25% protein
            carbPercentage = 0.50;    // 50% carbs
            fatPercentage = 0.25;     // 25% fat
            break;
        default:
            proteinPercentage = 0.30;
            carbPercentage = 0.45;
            fatPercentage = 0.25;
    }
    
    // Calculate daily macro targets in grams
    const dailyProtein = Math.round((dailyCalories * proteinPercentage) / 4); // 4 calories per gram of protein
    const dailyCarbs = Math.round((dailyCalories * carbPercentage) / 4);      // 4 calories per gram of carbs
    const dailyFat = Math.round((dailyCalories * fatPercentage) / 9);         // 9 calories per gram of fat
    
    // Filter meals based on dietary restrictions
    const filteredMeals = {};
    
    Object.keys(mealOptions).forEach(mealType => {
        filteredMeals[mealType] = mealOptions[mealType].filter(meal => {
            // Check if user has dietary restrictions that exclude this meal
            if (userData.dietaryRestrictions && userData.dietaryRestrictions.length > 0) {
                for (const restriction of userData.dietaryRestrictions) {
                    if (!meal.dietaryRestrictions.includes(restriction)) {
                        return false;
                    }
                }
            }
            return true;
        });
    });
    
    // Distribute calories across meals based on meal count preference
    let mealDistribution = {};
    
    switch (userData.mealCount) {
        case 3:
            mealDistribution = {
                breakfast: 0.30, // 30%
                lunch: 0.35,     // 35%
                dinner: 0.35      // 35%
            };
            break;
        case 4:
            mealDistribution = {
                breakfast: 0.25, // 25%
                lunch: 0.30,     // 30%
                dinner: 0.30,    // 30%
                snacks: 0.15     // 15%
            };
            break;
        case 5:
            mealDistribution = {
                breakfast: 0.20, // 20%
                snacks: 0.10,    // 10% (morning snack)
                lunch: 0.30,     // 30%
                snacks: 0.10,    // 10% (afternoon snack)
                dinner: 0.30     // 30%
            };
            break;
        default:
            mealDistribution = {
                breakfast: 0.30,
                lunch: 0.35,
                dinner: 0.35
            };
    }
    
    // Select meals based on calorie distribution
    const selectedMeals = {};
    
    // Simple selection algorithm (could be improved with more complexity)
    Object.keys(mealDistribution).forEach(mealType => {
        const targetCalories = dailyCalories * mealDistribution[mealType];
        
        // Find the meal closest to the target calories
        if (filteredMeals[mealType] && filteredMeals[mealType].length > 0) {
            const sortedMeals = [...filteredMeals[mealType]].sort((a, b) => {
                return Math.abs(a.calories - targetCalories) - Math.abs(b.calories - targetCalories);
            });
            
            selectedMeals[mealType] = sortedMeals[0];
        }
    });
    
    // Calculate totals
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    
    Object.values(selectedMeals).forEach(meal => {
        totalCalories += meal.calories;
        totalProtein += meal.protein;
        totalCarbs += meal.carbs;
        totalFat += meal.fat;
    });
    
    // Return the meal plan with nutritional information
    return {
        meals: selectedMeals,
        nutrition: {
            calories: {
                target: dailyCalories,
                actual: totalCalories
            },
            protein: {
                target: dailyProtein,
                actual: totalProtein
            },
            carbs: {
                target: dailyCarbs,
                actual: totalCarbs
            },
            fat: {
                target: dailyFat,
                actual: totalFat
            }
        }
    };
}

/**
 * Display the generated meal plan on the page
 * @param {object} mealPlan - The generated meal plan
 */
function displayMealPlan(mealPlan) {
    const mealPlanContainer = document.getElementById('meal-plan-container');
    
    if (!mealPlanContainer) {
        console.error('Meal plan container not found');
        return;
    }
    
    // Clear previous content
    mealPlanContainer.innerHTML = '';
    
    // Create meal plan header
    const header = document.createElement('div');
    header.className = 'meal-plan-header';
    header.innerHTML = `
        <h2>תוכנית הארוחות שלך</h2>
        <div class="nutrition-summary">
            <div class="nutrition-item">
                <span class="nutrition-label">קלוריות</span>
                <span class="nutrition-value">${mealPlan.nutrition.calories.actual} / ${mealPlan.nutrition.calories.target}</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">חלבון</span>
                <span class="nutrition-value">${mealPlan.nutrition.protein.actual}g / ${mealPlan.nutrition.protein.target}g</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">פחמימות</span>
                <span class="nutrition-value">${mealPlan.nutrition.carbs.actual}g / ${mealPlan.nutrition.carbs.target}g</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">שומן</span>
                <span class="nutrition-value">${mealPlan.nutrition.fat.actual}g / ${mealPlan.nutrition.fat.target}g</span>
            </div>
        </div>
    `;
    
    mealPlanContainer.appendChild(header);
    
    // Create meal cards for each meal
    Object.entries(mealPlan.meals).forEach(([mealType, meal]) => {
        const mealCard = document.createElement('div');
        mealCard.className = 'meal-card card';
        
        // Translate meal type
        let mealTypeHebrew;
        switch (mealType) {
            case 'breakfast':
                mealTypeHebrew = 'ארוחת בוקר';
                break;
            case 'lunch':
                mealTypeHebrew = 'ארוחת צהריים';
                break;
            case 'dinner':
                mealTypeHebrew = 'ארוחת ערב';
                break;
            case 'snacks':
                mealTypeHebrew = 'חטיף';
                break;
            default:
                mealTypeHebrew = mealType;
        }
        
        // Create ingredients list
        const ingredientsList = meal.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        
        mealCard.innerHTML = `
            <div class="meal-header">
                <h3>${mealTypeHebrew}: ${meal.name}</h3>
            </div>
            <div class="meal-content">
                <div class="meal-image">
                    <img src="${meal.image || '../assets/images/default-meal.jpg'}" alt="${meal.name}">
                </div>
                <div class="meal-info">
                    <div class="meal-nutrition">
                        <div class="nutrition-item">
                            <span class="nutrition-label">קלוריות</span>
                            <span class="nutrition-value">${meal.calories}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">חלבון</span>
                            <span class="nutrition-value">${meal.protein}g</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">פחמימות</span>
                            <span class="nutrition-value">${meal.carbs}g</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">שומן</span>
                            <span class="nutrition-value">${meal.fat}g</span>
                        </div>
                    </div>
                    <div class="meal-ingredients">
                        <h4>מרכיבים:</h4>
                        <ul class="ingredients-list">
                            ${ingredientsList}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="meal-footer">
                <button class="btn btn-primary change-meal-btn" data-meal-type="${mealType}">החלף ארוחה</button>
                <button class="btn btn-accent save-meal-btn" data-meal-id="${meal.id}">שמור ארוחה</button>
            </div>
        `;
        
        mealPlanContainer.appendChild(mealCard);
    });
    
    // Add event listeners to the change meal and save meal buttons
    addMealPlanButtonListeners(mealPlan);
    
    // Show the meal plan container with animation
    mealPlanContainer.classList.add('fade-in');
}

/**
 * Add event listeners to the meal plan buttons
 * @param {object} mealPlan - The current meal plan
 */
function addMealPlanButtonListeners(mealPlan) {
    // Add event listeners to "Change Meal" buttons
    const changeMealButtons = document.querySelectorAll('.change-meal-btn');
    changeMealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mealType = this.dataset.mealType;
            changeMeal(mealType, mealPlan);
        });
    });
    
    // Add event listeners to "Save Meal" buttons
    const saveMealButtons = document.querySelectorAll('.save-meal-btn');
    saveMealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mealId = this.dataset.mealId;
            saveMeal(mealId);
        });
    });
}

/**
 * Change a meal in the meal plan
 * @param {string} mealType - The type of meal to change
 * @param {object} currentMealPlan - The current meal plan
 */
function changeMeal(mealType, currentMealPlan) {
    // Get the current meal
    const currentMeal = currentMealPlan.meals[mealType];
    
    // Find alternative meals of the same type
    const alternativeMeals = mealOptions[mealType].filter(meal => meal.id !== currentMeal.id);
    
    if (alternativeMeals.length === 0) {
        alert('אין ארוחות חלופיות זמינות');
        return;
    }
    
    // Randomly select a different meal
    const randomIndex = Math.floor(Math.random() * alternativeMeals.length);
    const newMeal = alternativeMeals[randomIndex];
    
    // Update the meal plan
    currentMealPlan.meals[mealType] = newMeal;
    
    // Recalculate nutrition totals
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    
    Object.values(currentMealPlan.meals).forEach(meal => {
        totalCalories += meal.calories;
        totalProtein += meal.protein;
        totalCarbs += meal.carbs;
        totalFat += meal.fat;
    });
    
    currentMealPlan.nutrition.calories.actual = totalCalories;
    currentMealPlan.nutrition.protein.actual = totalProtein;
    currentMealPlan.nutrition.carbs.actual = totalCarbs;
    currentMealPlan.nutrition.fat.actual = totalFat;
    
    // Update the display
    displayMealPlan(currentMealPlan);
    
    // Show success message
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = 'הארוחה הוחלפה בהצלחה!';
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.right = '20px';
    message.style.zIndex = '1000';
    
    document.body.appendChild(message);
    
    // Remove the message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

/**
 * Save a meal to favorites (simulated)
 * @param {string} mealId - The ID of the meal to save
 */
function saveMeal(mealId) {
    // In a real app, this would save to localStorage or a server
    // For now, we'll just simulate it
    
    // Find the meal by ID
    let savedMeal = null;
    
    for (const mealType in mealOptions) {
        const meal = mealOptions[mealType].find(m => m.id === mealId);
        if (meal) {
            savedMeal = meal;
            break;
        }
    }
    
    if (savedMeal) {
        // Simulate saving to localStorage
        let savedMeals = JSON.parse(localStorage.getItem('savedMeals') || '[]');
        
        // Check if already saved
        if (!savedMeals.some(m => m.id === mealId)) {
            savedMeals.push(savedMeal);
            localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
            
            // Show success message
            alert('הארוחה נשמרה בהצלחה!');
        } else {
            alert('ארוחה זו כבר שמורה במועדפים');
        }
    } else {
        alert('לא ניתן למצוא את הארוחה');
    }
}

// Initialize the meal planner when the planner page loads
document.addEventListener('DOMContentLoaded', function() {
    const plannerForm = document.getElementById('planner-form');
    
    if (plannerForm) {
        plannerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get user data from form
            const userData = {
                age: parseInt(document.getElementById('age').value),
                weight: parseInt(document.getElementById('weight').value),
                height: parseInt(document.getElementById('height').value),
                gender: document.querySelector('input[name="gender"]:checked').value,
                activityLevel: document.getElementById('activity-level').value,
                goal: document.getElementById('goal').value,
                mealCount: parseInt(document.getElementById('meal-count').value),
                dietaryRestrictions: Array.from(document.querySelectorAll('input[name="dietary"]:checked')).map(input => input.value)
            };
            
            // Validate the data
            if (isNaN(userData.age) || isNaN(userData.weight) || isNaN(userData.height)) {
                alert('נא למלא את כל השדות המספריים');
                return;
            }
            
            // Generate the meal plan
            const mealPlan = generateMealPlan(userData);
            
            // Display the meal plan
            displayMealPlan(mealPlan);
            
            // Scroll to the meal plan
            document.getElementById('meal-plan-container').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
