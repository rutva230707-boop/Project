const fear = {
      fq1: {
        yes: 'Notice how your hand moves with each breath. You do not need to change it yet, just observe.',
        no: 'If touching your chest feels uncomfortable, you can instead notice how air feels on your nose or lips.'
      },
      fq2: {
        yes: 'Try one more slow breath if you can. Longer exhales can gently calm your body.',
        no: 'If slow breathing feels scary, you can focus on grounding with touch, sound, or sight instead.'
      },
      fq3: {
        yes: 'Say the name, shape, or colour of each thing you see to bring your mind into the room.',
        no: 'If looking around feels too intense, you can close your eyes and focus on one safe sound you can hear.'
      },
      fq4: {
        yes: 'Notice the temperature, texture, and weight of what you are holding. Describe it in your mind.',
        no: 'You do not need an object for grounding. You can use your breath or the contact of your body with the floor or chair.'
      },
      fq5: {
        yes: 'Reminding yourself “I am safe, my body is just having a strong alarm right now” can sometimes reduce fear.',
        no: 'If you are not safe or not sure, please move to a safer place or contact someone who can help you immediately.'
      }
    };


    function handleFear(name) {
      const radios = document.getElementsByName(name);
      let value = null;
      for (const r of radios) {
        if (r.checked) { value = r.value; break; }
      }
      const el = document.getElementById(name + '-result');
      if (!value) {
        el.textContent = 'Please choose an option.';
        el.style.color = '#c0392b';
        return;
      }
      el.style.color = '#007c91';
      el.textContent = fearResponses[name][value];
    }