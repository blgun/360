// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { Math as VRMath, ReactInstance, Surface } from "react-360-web";

import { Math as GLMath } from "webgl-ui";
const { rotateByQuaternion } = GLMath;

function init(bundle, parent, options = {}) {
  // const buttonsPanel = new Surface(300, 300, Surface.SurfaceShape.Flat);
  const hvPanel = new Surface(300, 300, Surface.SurfaceShape.Flat);

  // buttonsPanel.setAngle(0, -0.5);

  const cameraDirection = [0, 0, -1];
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    frame: () => {
      const cameraQuat = r360.getCameraQuaternion();
      cameraDirection[0] = 0;
      cameraDirection[1] = 0;
      cameraDirection[2] = -1;
      // cameraDirection will point out from the view of the camera,
      // we can use it to compute surface angles
      rotateByQuaternion(cameraDirection, cameraQuat);
      const cx = cameraDirection[0];
      const cy = cameraDirection[1];
      const cz = cameraDirection[2];
      const horizAngle = Math.atan2(cx, -cz);
      const vertAngle = Math.asin(cy / Math.sqrt(cx * cx + cy * cy + cz * cz));
      // buttonsPanel.setAngle(horizAngle, -0.5);
      hvPanel.setAngle(horizAngle, vertAngle);
    },
    ...options,
  });

  // const buttonsPanel = new Surface(400, 550, Surface.SurfaceShape.Flat);
  // buttonsPanel.setAngle(-0.6, 0.1);

  // const infoPanel = new Surface(400, 550, Surface.SurfaceShape.Flat);
  // infoPanel.setAngle(0.6, 0.1);

  // Render your app content to the default cylinder surface
  // r360.renderToSurface(
  //   r360.createRoot("Buttons", {
  //     /* initial props */
  //   }),
  //   buttonsPanel
  // );

  // r360.renderToSurface(r360.createRoot("Buttons"), buttonsPanel);
  r360.renderToSurface(r360.createRoot("Buttons"), hvPanel);

  // r360.renderToSurface(
  //   r360.createRoot("Info", {
  //     /* initial props */
  //   }),
  //   infoPanel
  // );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_Улаанбаатар.jpg"));
}

window.React360 = { init };
