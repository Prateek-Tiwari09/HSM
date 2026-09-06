/* ============================================
   FORM INTEGRATION — Configure before launch
   ============================================
   Choose ONE method and configure below.

   Option A — Formspree:
     Set FORM_ACTION to your Formspree endpoint
     e.g. "https://formspree.io/f/YOUR_ID"

   Option B — EmailJS:
     Set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
     and EMAILJS_PUBLIC_KEY

   Option C — Custom PHP endpoint:
     Set FORM_ACTION to your PHP handler URL

   Option D — CRM/Custom API:
     Replace the submitForm() function body
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[data-validate="true"]');
  forms.forEach(form => initFormValidation(form));
});

function initFormValidation(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;
    const inputs = form.querySelectorAll('[required]');

    inputs.forEach(input => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });

    if (!isValid) {
      const firstError = form.querySelector('.has-error');
      if (firstError) firstError.focus();
      return;
    }

    // Submit animation / state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Processing...</span>';
    }

    const messageBox = form.querySelector('.form-message-container');

    try {
      // Simulate form submission (static demo mode)
      await new Promise(resolve => setTimeout(resolve, 800));

      if (messageBox) {
        messageBox.innerHTML = `
          <div class="form-message form-message--success" role="alert">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            <div>
              <strong>Thank you for your enquiry.</strong>
              <p style="margin: 4px 0 0 0; font-size: 13px;">Our technical engineering team will review your requirement and contact you within 24 business hours.</p>
            </div>
          </div>
        `;
      }

      form.reset();
    } catch (err) {
      if (messageBox) {
        messageBox.innerHTML = `
          <div class="form-message form-message--error" role="alert">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
            <div>
              <strong>Submission Error</strong>
              <p style="margin: 4px 0 0 0; font-size: 13px;">There was a problem sending your message. Please try calling us directly at +91 9740392560.</p>
            </div>
          </div>
        `;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  });

  // Realtime clear error
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('has-error')) {
        validateInput(input);
      }
    });
  });
}

function validateInput(input) {
  const value = input.value.trim();
  let isValid = true;
  let errorMessage = '';

  if (input.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required.';
  } else if (input.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address.';
    }
  } else if (input.type === 'tel' && value) {
    const phoneRegex = /^[0-9+\s\-()]{7,20}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid phone number.';
    }
  }

  const parent = input.closest('.form-group') || input.parentElement;
  let errorEl = parent.querySelector('.form-error');

  if (!isValid) {
    input.classList.add('has-error');
    input.setAttribute('aria-invalid', 'true');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'form-error';
      parent.appendChild(errorEl);
    }
    errorEl.textContent = errorMessage;
  } else {
    input.classList.remove('has-error');
    input.removeAttribute('aria-invalid');
    if (errorEl) {
      errorEl.remove();
    }
  }

  return isValid;
}
