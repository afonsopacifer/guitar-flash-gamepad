const gamepad = new Gamepad();

gamepad.on('press', 'button_3', e => {
  console.log(`player ${e.player} pressed ${e.button}!`);
});

gamepad.setCustomMapping('keyboard', {
  'button_1': 76, // X
  'shoulder_top_left': [65], // L1
  'shoulder_bottom_left': [83], // L2
  'shoulder_top_right': [74], // R1
  'shoulder_bottom_right': [75] // R2
});