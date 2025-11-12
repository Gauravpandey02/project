export const mockDevices = [
  {
    id: 1,
    name: "Alexa Speaker",
    dataTypes: {
      voice: true,
      location: false,
      usageStats: true,
    },
    lastTransmission: "2025-11-12T20:30:00Z",
  },
  {
    id: 2,
    name: "Ring Camera",
    dataTypes: {
      video: true,
      motion: true,
      audio: false,
    },
    lastTransmission: "2025-11-12T20:28:00Z",
  },
  {
    id: 3,
    name: "Smart Fridge",
    dataTypes: {
      temperature: true,
      usageStats: true,
      internalCam: false,
    },
    lastTransmission: "2025-11-12T20:25:00Z",
  },
];
