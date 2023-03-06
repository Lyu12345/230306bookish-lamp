


stand.traverse((child) => {
  if (child.isMesh) {
    child.receiveShadow = true;
  }
});




stand.traverse((obj3d) => {
  obj3d.castShadow = ture;
  obj3d.receiveShadow = true;
});
