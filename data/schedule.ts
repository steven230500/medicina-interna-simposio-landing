export type ScheduleItem = {
  time: string;
  topic: string;
  type:
    | "standard"
    | "break"
    | "workshop"
    | "highlight-yellow"
    | "highlight-red"
    | "highlight-green";
};

export type DaySchedule = {
  date: string;
  day: string;
  schedule: ScheduleItem[];
};

export const scheduleData: DaySchedule[] = [
  {
    day: "Jueves",
    date: "26 de Febrero",
    schedule: [
      { time: "07:00 - 07:15", topic: "Registro", type: "break" },
      {
        time: "07:15 - 07:30",
        topic: "Bienvenida por Jefe del departamento de Medicina Interna",
        type: "standard",
      },
      {
        time: "07:30 - 08:00",
        topic:
          "Paciente con VIH: Lo que todo médico debe hacer en la primera atención",
        type: "standard",
      },
      {
        time: "08:00 - 08:30",
        topic:
          "Emergencia Hipertensiva: Distinción, Blancos Terapéuticos y Manejo Farmacológico",
        type: "standard",
      },
      {
        time: "08:30 - 09:00",
        topic: "Síncope: Estratificación de Riesgo y Conducta Clínica",
        type: "standard",
      },
      {
        time: "09:00 - 09:30",
        topic:
          "Insuficiencia Hepática Aguda: Criterios de Gravedad y Soporte Inicial",
        type: "standard",
      },
      { time: "09:30 - 10:00", topic: "REFRIGERIO", type: "break" },
      {
        time: "10:00 - 10:30",
        topic:
          "Hepatograma Anormal: Patrones de Lesión y Algoritmo Diagnóstico",
        type: "standard",
      },
      {
        time: "10:30 - 11:00",
        topic: "Uso de agonistas GLP-1/GIP más allá del control glucémico",
        type: "standard",
      },
      {
        time: "11:00 - 11:30",
        topic: "Enfoque de la Disfagia",
        type: "standard",
      },
      {
        time: "11:30 - 12:00",
        topic: "Tormenta tiroidea en urgencias",
        type: "standard",
      },
      {
        time: "12:00 - 12:30",
        topic:
          "Lesión Renal Aguda (AKI): Abordaje Sistemático y Prevención de la Progresión",
        type: "standard",
      },
      { time: "12:30 - 01:30", topic: "ALMUERZO", type: "break" },
      {
        time: "01:30 - 02:00",
        topic:
          "Estatus Epiléptico: Protocolo Escalonado de Manejo en el Servicio de Urgencias",
        type: "standard",
      },
      {
        time: "02:00 - 02:30",
        topic:
          "Abordaje Diagnóstico de Anemias y Trombocitopenias en Medicina Interna",
        type: "standard",
      },
      {
        time: "02:30 - 03:00",
        topic:
          "Interpretación Sistemática de la Tomografía en el Accidente Cerebrovascular Agudo",
        type: "standard",
      },
      {
        time: "03:00 - 03:30",
        topic:
          "Crisis hiperglucemicas: Manejo Protocolizado de la Cetoacidosis Diabética y Estado Hiperosmolar",
        type: "highlight-yellow",
      },
      {
        time: "03:30 - 04:00",
        topic:
          "Sospecha de Enfermedad Reumatológica: Signos de Alarma para la atención primaria",
        type: "standard",
      },
      {
        time: "04:00 - 05:00",
        topic: "Taller ECG en urgencias",
        type: "highlight-green",
      },
    ],
  },
  {
    day: "Viernes",
    date: "27 de Febrero",
    schedule: [
      { time: "06:45 - 07:00", topic: "Registro", type: "break" },
      {
        time: "07:00 - 07:30",
        topic: "Tromboembolismo pulmonar agudo",
        type: "standard",
      },
      {
        time: "07:30 - 08:00",
        topic: "Enfermedad renal diabetica",
        type: "highlight-yellow",
      },
      {
        time: "08:00 - 08:30",
        topic: "Toxidromes en Urgencias: Reconocimiento Clínico y Antídotos",
        type: "standard",
      },
      {
        time: "08:30 - 09:00",
        topic:
          "Enfoque Sindromático del Paciente Febril en Zonas Endémicas Tropicales",
        type: "highlight-green",
      },
      {
        time: "09:00 - 09:30",
        topic: "Asma: De la crisis al control total",
        type: "standard",
      },
      { time: "09:30 - 10:00", topic: "REFRIGERIO", type: "break" },
      {
        time: "10:00 - 10:30",
        topic:
          "Diagnóstico Diferencial en Glomerulopatías: Claves para Distinguir Nefrótico de Nefrítico",
        type: "highlight-green",
      },
      { time: "10:30 - 11:00", topic: "Neutropenia febril", type: "standard" },
      {
        time: "11:00 - 11:30",
        topic:
          "Sepsis y Shock Séptico: Actualización en Reanimación y el 'Hour-1 Bundle'",
        type: "highlight-red",
      },
      {
        time: "11:30 - 12:00",
        topic: "EPOC GOLD 2026: ¿Qué cambió en las guías?",
        type: "standard",
      },
      {
        time: "12:00 - 12:30",
        topic: "Interpretacion de pruebas reumatologicas",
        type: "highlight-red",
      },
      { time: "12:30 - 12:45", topic: "Clausura", type: "standard" },
      { time: "12:45 - 02:00", topic: "ALMUERZO", type: "break" },
      {
        time: "02:00 - 03:00",
        topic: "Charla patrocinada: Terapia insulinica",
        type: "standard",
      },
      {
        time: "03:00 - 04:00",
        topic: "Taller antibióticoterapia",
        type: "workshop",
      },
      {
        time: "04:00 - 05:00",
        topic: "Taller manejo de disnatremias",
        type: "highlight-green",
      },
    ],
  },
];
