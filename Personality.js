const pdResponses = {
      pq1: {
        yes: 'Naming a feeling can make it feel a little less out of control. You can say, “Right now I feel…”.',
        no: 'If words are hard, you can notice body signals instead, like tight chest, fast heart, or heavy eyes.'
      },
      pq2: {
        yes: 'Reminding yourself “In this moment I am physically safe” can sometimes lower the intensity a bit.',
        no: 'If you are not safe, please move to a safer place or contact someone who can help you immediately.'
      },
      pq3: {
        yes: 'Taking a pause can protect your relationships and give you time to choose what you truly want to say.',
        no: 'If pausing feels impossible, you might write your feelings in a private note first instead of sending them.'
      },
      pq4: {
        yes: 'Let them know clearly what you need: listening, presence, or help with a plan.',
        no: 'If nobody feels safe right now, you might use grounding, writing, or a helpline as other forms of support.'
      },
      pq5: {
        yes: 'You can keep your plan somewhere easy to see, like a phone note or card in your wallet.',
        no: 'You might bring this idea to a future appointment or look for services when you feel ready.'
      }
    };

    function handlePD(name) {
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
      el.textContent = pdResponses[name][value];
    }