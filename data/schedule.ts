export type ScheduleItem = {
  time: string;
  topic: string;
  speaker?: string;
  role?: string;
  status?: "confirmed" | "pending" | "cancelled" | "changed";
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
        speaker: "Dr. Martinez",
        role: "Infectología",
        type: "standard",
      },
      {
        time: "08:00 - 08:30",
        topic:
          "Emergencia Hipertensiva: Distinción, Blancos Terapéuticos y Manejo Farmacológico",
        speaker: "Dr. Messu",
        role: "Cardiología",
        type: "standard",
      },
      {
        time: "08:30 - 09:00",
        topic: "Síncope: Estratificación de Riesgo y Conducta Clínica",
        speaker: "Dr. Yamid",
        role: "Cardiología",
        type: "standard",
      },
      {
        time: "09:00 - 09:30",
        topic:
          "Insuficiencia Hepática Aguda: Criterios de Gravedad y Soporte Inicial",
        speaker: "Dra. Diana / Vanessa",
        role: "G/H",
        type: "standard",
      },
      { time: "09:30 - 10:00", topic: "REFRIGERIO", type: "break" },
      {
        time: "10:00 - 10:30",
        topic:
          "Hepatograma Anormal: Patrones de Lesión y Algoritmo Diagnóstico",
        speaker: "Dr. Camilo",
        role: "G/H",
        type: "standard",
      },
      {
        time: "10:30 - 11:00",
        topic: "Uso de agonistas GLP-1/GIP más allá del control glucémico",
        type: "standard",
      }, // No speaker in image? "Dr. Garcia" is listed for "Riesgo Cardiovascular en Dislipidemia" which is missing here?
      {
        time: "11:00 - 11:30",
        topic: "Enfoque de la Disfagia",
        speaker: "Dr. Hernandez",
        role: "G/H",
        status: "pending",
        type: "standard",
      },
      {
        time: "11:30 - 12:00",
        topic: "Tormenta tiroidea en urgencias",
        type: "standard",
      }, // Image has "Riesgo Cardiovascular en Dislipidemia/ Manejo de la Tormenta Tiroidea"? No, separate lines. Tormenta tiroidea doesn't have a clear row in the crop or maybe I missed it. Wait, "Riesgo Cardiovascular en Dislipidemia/ Manejo de la Tormenta Tiroidea" might be Dr Garcia?
      {
        time: "12:00 - 12:30",
        topic:
          "Lesión Renal Aguda (AKI): Abordaje Sistemático y Prevención de la Progresión",
        speaker: "Dr. Gomez",
        role: "Nefrología",
        type: "standard",
      },
      { time: "12:30 - 01:30", topic: "ALMUERZO", type: "break" },
      {
        time: "01:30 - 02:00",
        topic:
          "Estatus Epiléptico: Protocolo Escalonado de Manejo en el Servicio de Urgencias",
        speaker: "Dr. Toloza",
        role: "Neurología",
        status: "pending",
        type: "standard",
      },
      {
        time: "02:00 - 02:30",
        topic:
          "Abordaje Diagnóstico de Anemias y Trombocitopenias en Medicina Interna",
        speaker: "Dr. Quesada",
        role: "Hematología",
        status: "pending",
        type: "standard",
      },
      {
        time: "02:30 - 03:00",
        topic:
          "Interpretación Sistemática de la Tomografía en el Accidente Cerebrovascular Agudo",
        speaker: "Dr. Parra",
        role: "Radiología",
        type: "standard",
      },
      {
        time: "03:00 - 03:30",
        topic:
          "Crisis hiperglucemicas: Manejo Protocolizado de la Cetoacidosis Diabética y Estado Hiperosmolar",
        speaker: "Yeimer Ortiz",
        role: "UCI",
        type: "highlight-yellow",
      },
      {
        time: "03:30 - 04:00",
        topic:
          "Sospecha de Enfermedad Reumatológica: Signos de Alarma para la atención primaria",
        speaker: "Dr. Santos",
        role: "Reumatólogo",
        status: "pending",
        type: "standard",
      },
      {
        time: "04:00 - 05:00",
        topic: "Taller ECG en urgencias",
        speaker: "Dr. Hurtado",
        role: "Cardiología",
        status: "pending",
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
        topic:
          "Más allá del diurético: Optimizando la falla cardíaca con FEVI reducida",
        speaker: "Dr. Herrera",
        role: "Cardiología",
        status: "pending",
        type: "standard",
      }, // Was TEP Agudo, changed to Dr Herrera topic? Image line 1
      {
        time: "07:30 - 08:00",
        topic:
          "Nefropatía Diabética: Nuevas Estrategias de Nefroprotección y Manejo Integral",
        speaker: "Dr. Rico",
        role: "Nefrología",
        status: "pending",
        type: "highlight-yellow",
      }, // Updated title
      {
        time: "08:00 - 08:30",
        topic: "Toxidromes en Urgencias: Reconocimiento Clínico y Antídotos",
        speaker: "Dr. Maurix",
        role: "Toxicología",
        type: "standard",
      },
      {
        time: "08:30 - 09:00",
        topic:
          "Enfoque Sindromático del Paciente Febril en Zonas Endémicas Tropicales",
        speaker: "Dra. Jenny",
        role: "Infectología",
        type: "highlight-green",
      },
      {
        time: "09:00 - 09:30",
        topic: "Asma: De la crisis al control total",
        speaker: "Dra. Ingrid",
        role: "Neumología",
        status: "pending",
        type: "standard",
      },
      { time: "09:30 - 10:00", topic: "REFRIGERIO", type: "break" },
      {
        time: "10:00 - 10:30",
        topic:
          "Diagnóstico Diferencial en Glomerulopatías: Claves para Distinguir Nefrótico de Nefrítico",
        speaker: "Dra. Mejia",
        role: "Nefrología",
        type: "highlight-green",
      },
      {
        time: "10:30 - 11:00",
        topic: "Neutropenia febril",
        speaker: "Dr. Jhonnattan Morales",
        role: "Infectología",
        status: "cancelled",
        type: "standard",
      }, // Marked "No puede" in red
      {
        time: "11:00 - 11:30",
        topic:
          "Sepsis y Shock Séptico: Actualización en Reanimación y el 'Hour-1 Bundle'",
        speaker: "Tomas Rodriguez / Carmelo Dueñas",
        role: "UCI",
        type: "highlight-red",
      },
      {
        time: "11:30 - 12:00",
        topic: "EPOC GOLD 2026: ¿Qué cambió en las guías?",
        speaker: "Dr. Guerrero",
        role: "Neumología",
        type: "standard",
      },
      {
        time: "12:00 - 12:30",
        topic: "Interpretacion de pruebas reumatologicas",
        speaker: "Dr. Del Castillo",
        role: "Reumatólogo",
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
        speaker: "Dr. Carrera",
        role: "Infectología",
        status: "pending",
        type: "workshop",
      },
      {
        time: "04:00 - 05:00",
        topic: "Taller manejo de disnatremias",
        type: "highlight-green",
      }, // Couldn't find specific speaker, maybe "Taller potacsio" Dr Fredy? Keeping as is for now or assumed Fredy.
    ],
  },
];
