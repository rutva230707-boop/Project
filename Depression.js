const depressionResponses = {
      dq1: {
        yes: 'Choose one tiny action and do it slowly. Small steps still count, even if they feel small.',
        no: 'If now is too hard, that is okay. Just reading this page is already an effort.'
      },
      dq2: {
        yes: 'You could send a short, honest message like “I am low today and just needed to say it.”',
        no: 'If no one feels safe to message, you are still worthy of care. You may want to consider a helpline or online support when you are ready.'
      },
      dq3: {
        yes: 'You might try turning down lights, putting your phone away, and letting your body rest.',
        no: 'If rest feels impossible, focus on gentle kindness to yourself. You are doing your best with the energy you have.'
      },
      dq4: {
        yes: 'Try to give yourself a few minutes with that comforting thing, even if your mood has not changed yet.',
        no: 'Sometimes nothing feels enjoyable. You can simply sit, breathe slowly, and notice that you made it to this moment.'
      },
      dq5: {
        yes: 'You can write down a few notes about how you feel and share them with a professional.',
        no: 'You might not feel ready yet. You can come back to this idea later; your pace matters.'
      }
    };

    function handleDepression(name) {
      const radios = document.getElementsByName(name);
      let value = null;
      for (const r of radios) {
        if (r.checked) { value = r.value; break; }
      }
      const el = document.getElementById(name + '-result');
      if (!value) {
        el.textContent = 'Please choose Yes or No.';
        el.style.color = '#c0392b';
        return;
      }
      el.style.color = '#007c91';
      el.textContent = depressionResponses[name][value];
    }