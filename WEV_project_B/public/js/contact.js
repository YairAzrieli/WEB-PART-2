document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // הסתרת הודעות קודמות
            if (errorMessage) errorMessage.style.display = 'none';
            if (successMessage) successMessage.style.display = 'none';

            try {
                const formData = new FormData(form);
                const response = await fetch('/contact', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    // ניקוי הטופס
                    form.reset();
                    
                    // הצגת הודעת הצלחה
                    if (successMessage) {
                        successMessage.textContent = 'ההודעה נשלחה בהצלחה!';
                        successMessage.style.display = 'block';
                    }

                    // ניקוי הודעת ההצלחה אחרי 5 שניות
                    setTimeout(() => {
                        if (successMessage) successMessage.style.display = 'none';
                    }, 5000);
                } else {
                    const data = await response.json();
                    if (errorMessage) {
                        errorMessage.textContent = data.error || 'שגיאה בשליחת ההודעה';
                        errorMessage.style.display = 'block';
                    }
                }
            } catch (error) {
                console.error('Error:', error);
                if (errorMessage) {
                    errorMessage.textContent = 'שגיאה בשליחת ההודעה';
                    errorMessage.style.display = 'block';
                }
            }
        });
    }
}); 