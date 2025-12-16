// Responses for each question (for Yes and No)
    const responses = {
      q1: {
        yes: 'It is okay to want someone near you. You can ask them to stay close and just be with you.',
        no: 'It is okay if you prefer to be alone. You can still use breathing and grounding to support yourself.'
      },
      q2: {
        yes: 'Great. Try breathing in for 4 seconds, hold for 6, and breathe out for 8, a few times together.',
        no: 'If breathing together feels uncomfortable, you can choose another tool like grounding or gentle movement.'
      },
      q3: {
        yes: 'Notice each of the 5 things you can see and say them slowly in your mind or out loud.',
        no: 'If this feels hard right now, you can close your eyes for a moment or focus just on one safe thing you see.'
      },
      q4: {
        yes: 'Go slowly through touch, sound, smell, and taste. You do not have to rush.',
        no: 'You can stop at any point. Even noticing one or two senses can still help a little.'
      },
      q5: {
        yes: 'Choose one small thing, like sitting, lying down, or holding a soft or cool object that feels safe.',
        no: 'That is okay. You do not have to change anything; simply noticing your breath is already a step.'
      },
      q6: {
        yes: 'You can ask for the kind of words that help, like reminders that you are safe in this moment.',
        no: 'Quiet presence can be powerful. Just sitting together or nearby can still give comfort.'
      },
      q7: {
        yes: 'When you feel calmer, you can write a small plan about what helped you most today.',
        no: 'You can always plan later when you feel ready; there is no pressure to decide right now.'
      }
    };

    function handleQuestion(qName) {
      const radios = document.getElementsByName(qName);
      let value = null;

      for (const r of radios) {
        if (r.checked) {
          value = r.value;
          break;
        }
      }

      const resultEl = document.getElementById(qName + '-result');

      if (!value) {
        resultEl.textContent = 'Please choose Yes or No.';
        resultEl.style.color = '#c0392b';
        return;
      }

      resultEl.style.color = '#007c91';
      resultEl.textContent = responses[qName][value];
    }