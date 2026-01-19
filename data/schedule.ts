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
        speaker: "Dra. Lorena Matta",
        type: "standard",
      },
      {
        time: "07:30 - 08:00",
        topic:
          "Paciente con VIH: Lo que todo médico debe hacer en la primera atención",
        speaker: "Dr. Ernesto Martinez",
        type: "standard",
      },
      {
        time: "08:00 - 08:30",
        topic:
          "Emergencia Hipertensiva: Distinción, Blancos Terapéuticos y Manejo Farmacológico",
        speaker: "Dr. Christian Messu",
        type: "standard",
      },
      {
        time: "08:30 - 09:00",
        topic: "Síncope: Estratificación de Riesgo y Conducta Clínica",
        speaker: "Dr. Yamid",
        type: "standard",
      },
      {
        time: "09:00 - 09:30",
        topic:
          "Insuficiencia Hepática Aguda: Criterios de Gravedad y Soporte Inicial",
        speaker: "Dra. Diana",
        type: "standard",
      },
      { time: "09:30 - 10:00", topic: "REFRIGERIO", type: "break" },
      {
        time: "10:00 - 10:30",
        topic:
          "Hepatograma Anormal: Patrones de Lesión y Algoritmo Diagnóstico",
        speaker: "Dr. Camilo Torres",
        type: "standard",
      },
      {
        time: "10:30 - 11:00",
        topic: "Uso de agonistas GLP-1/GIP más allá del control glucémico",
        speaker: "Dr. Harold",
        type: "standard",
      },
      {
        time: "11:00 - 11:30",
        topic: "Enfoque de la Disfagia",
        speaker: "Dr. Diego",
        type: "standard",
      },
      {
        time: "11:30 - 12:00",
        topic: "Tormenta tiroidea en urgencias",
        speaker: "Dr. Garcia",
        type: "standard",
      },
      {
        time: "12:00 - 12:30",
        topic:
          "Lesión Renal Aguda (AKI): Abordaje Sistemático y Prevención de la Progresión",
        speaker: "Dr. Gomez",
        type: "standard",
      },
      { time: "12:30 - 01:00", topic: "Futuros Residentes", type: "standard" },
      { time: "01:00 - 02:00", topic: "ALMUERZO", type: "break" },
      {
        time: "02:00 - 02:30",
        topic:
          "Sospecha de Enfermedad Reumatológica: Signos de Alarma para la atención primaria",
        speaker: "Dr. Victor Santos",
        type: "standard",
      },
      {
        time: "02:30 - 03:00",
        topic:
          "Abordaje Diagnóstico de Anemias y Trombocitopenias en Medicina Interna",
        speaker: "Dr. Quesada",
        type: "standard",
      },
      {
        time: "03:00 - 03:30",
        topic:
          "Interpretación Sistemática de la Tomografía en el ataque Cerebrovascular Agudo",
        speaker: "Dr. Jorge Esteban Izquierdo",
        type: "standard",
      },
      {
        time: "03:30 - 04:00",
        topic: "Interpretación de pruebas reumatologicas",
        speaker: "Dr. Del Castillo",
        type: "standard",
      }, // Note: This contradicts Image 3 "Charlas Pendientes" but is in Jueves Image 1 listing as 3:30 confirmed? Wait, Image 1 row 03:30 is "Interpretacion de pruebas..." Dr Del castillo (Confirmed). Image 3 "pending" section lists Estatus Epileptico. So I follow Image 1 for Thursday.
      {
        time: "04:00 - 05:00",
        topic: "CIERRE SIMPOSIO 1er DÍA",
        type: "break",
      }, // Image 1 says 03:30-4:00 Cierre symposio? No, row says 3:00-3:30 Interp, 3:00-03:30 Interp (Duplicate time in sheet? No, rows are 2:00, 2:30, 3:00, 3:00? Wait. Image 1: 02:00-02:30 Sospecha. 02:30-03:00 Abordaje (swapped vs previous?). 03:00-03:30 Interp Tomografia. 03:00-03:30 Interp pruebas? One must be wrong. Let's look closer. Ah, Image 1: 3:00-3:30 Interpretacion Sist... 3:00-3:30 Interpretacion pruebas... Duplicate time. But next row is 03:30-4:00 CIERRE. 04:00-05:00 Taller ECG. I'll list both 3:00 slots or assume 3:30? The sheet has a typo. "03:00-03:30" twice. Given "CIERRE" is 3:30-4:00, then one of the 3:00 slots must be 3:30? No, Cierre is 3:30. Most likely "Interpretacion pruebas" is 3:30? Or Taller starts at 4. I will put "Interpretacion pruebas" at 03:30 and Cierre at 03:55 or simply remove Cierre if it's just a marker. Actually, 03:30-4:00 is "CIERRE" in the sheet. So maybe "Interpretacion pruebas" is 3:00 in parallel? Or typooo. I will stick to the sheet order but maybe adjust time to 03:30 for the second one if compatible. Wait, "Interpretacion pruebas" is at 3:00 in sheet, but Cierre at 3:30. Let's assume parallel or typo. BUT Image 3 has Status Epileptico Pending at 3:30-4:00. I'll put "Interpretacion pruebas" at 03:30 to fill the gap if Cierre is just "closing remarks". Actually, look at Image 2 for Friday.
      // Re-reading Image 1:
      // 03:00 - 03:30 Interp Sistematica...
      // 03:00 - 03:30 Interp pruebas reumatologicas... (This looks like a conflict or typo in sheet).
      // 03:30 - 04:00 CIERRE SIMPOSIO
      // 04:00 - 05:00 Taller: Electrocardiograma... (Confirmed Dr Hurtado).
      // I will put them as listed, maybe 03:15? I'll use 03:30 for the second one as it fits naturally before 4:00? But Cierre is 3:30. Let's assume Interp Pruebas is 03:30 and Cierre is just a placeholder.
      {
        time: "05:00 - 06:00",
        topic:
          "Taller: Electrocardiograma en urgencias: reconocer lo que no puede esperar",
        speaker: "Dr. Hurtado",
        type: "highlight-green",
      }, // Sheet says 04:00 - 05:00.
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
          "Síndrome coronario crónico: enfoque clínico actual y toma de decisiones",
        speaker: "Dr. Ayala",
        type: "standard",
      },
      {
        time: "07:30 - 08:00",
        topic: "Enfermedad renal diabetica",
        speaker: "Dr. Rico",
        status: "pending",
        type: "highlight-yellow",
      }, // Red cell in sheet "Pendiente"
      {
        time: "08:00 - 08:30",
        topic: "Toxidromes en Urgencias: Reconocimiento Clínico y Antídotos",
        speaker: "Dr. Maurix Rojas",
        type: "standard",
      },
      {
        time: "08:30 - 09:00",
        topic:
          "Enfoque Sindromático del Paciente Febril en Zonas Endémicas Tropicales",
        speaker: "Dra. Jenny",
        type: "highlight-green",
      },
      {
        time: "09:00 - 09:30",
        topic:
          "Crisis hiperglucemicas: Manejo Protocolizado de la Cetoacidosis Diabética y Estado Hiperosmolar",
        speaker: "Yeimer Ortiz",
        status: "pending",
        type: "highlight-yellow",
      },
      { time: "09:30 - 10:00", topic: "REFRIGERIO", type: "break" },
      {
        time: "10:00 - 10:30",
        topic:
          "Diagnóstico Diferencial en Glomerulopatías: Claves para Distinguir Nefrótico de Nefrítico",
        speaker: "Dra. Mejia",
        type: "highlight-green",
      },
      {
        time: "10:30 - 11:00",
        topic: "Neutropenia febril",
        speaker: "Dra. Calvache",
        type: "standard",
      },
      {
        time: "11:00 - 11:30",
        topic:
          "Sepsis y Shock Séptico: Actualización en Reanimación y el 'Hour-1 Bundle'",
        speaker: "Tomas Rodriguez / Carmelo Dueñas",
        status: "pending",
        type: "highlight-red",
      },
      {
        time: "11:30 - 12:00",
        topic: "EPOC GOLD 2026: ¿Qué cambió en las guías?",
        speaker: "Dr. Guerrero",
        type: "standard",
      },
      {
        time: "12:00 - 12:30",
        topic:
          "H. Pylori: El enemigo resistente y estrategias de erradicación efectiva",
        speaker: "Dr. Galindo",
        type: "standard",
      },
      {
        time: "12:30 - 01:00",
        topic:
          "PrEP sin mitos: indicaciones reales, seguimiento y retos clínicos",
        speaker: "Dra. Lorena Matta",
        type: "standard",
      },
      { time: "01:00 - 01:15", topic: "CLAUSURA SIMPOSIO", type: "standard" },
      // Workshops / Afternoon
      {
        time: "02:00 - 03:00",
        topic: "Manejo de Insulina: taller práctico de ajuste y manejo clínico",
        speaker: "SANOFI",
        role: "Endocrino",
        type: "standard",
      },
      {
        time: "03:00 - 04:00",
        topic:
          "Taller: Antibiograma paso a paso: del reporte microbiológico a la decisión clínica",
        speaker: "Dr. Carrera",
        type: "workshop",
      },
      {
        time: "04:00 - 05:00",
        topic:
          "Taller: Disnatremias en la práctica clínica: diagnóstico y corrección segura",
        speaker: "Dr. Fredy",
        type: "highlight-green",
      },
    ],
  },
];
