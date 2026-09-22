export type AchievementCategory = 'education' | 'olympiads' | 'appreciation' | 'programs';

export interface Achievement {
  year: string;
  title: string;
  category: AchievementCategory;
  files: string[];
}

export const achievements: Achievement[] = [
  { year: '2026', title: 'AUEZOV University International Winter School — AI in agriculture and resource management', category: 'education', files: ['/achievements/certificate-28.webp'] },
  { year: '2025', title: 'ESG Transformation of Business — Ufa State Petroleum Technological University', category: 'education', files: ['/achievements/certificate-34.webp'] },
  { year: '2023', title: 'Mentoring Project Teams — Plekhanov Russian University of Economics', category: 'education', files: ['/achievements/certificate-19.webp'] },
  { year: '2022', title: 'Russia Youth Environmental Program — CSU San Marcos and Southern Utah University', category: 'education', files: ['/achievements/certificate-8.webp'] },
  { year: '2021', title: 'Project Management for Sustainable Development — Peter the Great St. Petersburg Polytechnic University', category: 'education', files: ['/achievements/certificate-23.webp'] },
  { year: '2021', title: 'Arctic Geopolitics and Climate Change — Tampere University', category: 'education', files: ['/achievements/certificate-3.webp'] },
  { year: '2020', title: 'Junior Nurse for Patient Care — Medical College No. 6', category: 'education', files: ['/achievements/certificate-30.webp'] },

  { year: '2024', title: 'International Student Olympiad — Ecology and Russian Language, bronze medal', category: 'olympiads', files: ['/achievements/certificate-11.webp'] },
  { year: '2024', title: 'International Student Olympiad of the CIS Countries — Ecology, prize-winner', category: 'olympiads', files: ['/achievements/certificate-31.webp'] },
  { year: '2023', title: 'I Am a Professional — Carbon Regulation, prize-winner', category: 'olympiads', files: ['/achievements/certificate-7.webp'] },
  { year: '2023', title: 'International Student Olympiad — Ecology, bronze medal', category: 'olympiads', files: ['/achievements/certificate-20.webp'] },
  { year: '2022', title: 'I Am a Professional — Ecology, gold medal and Top 3 in Russia', category: 'olympiads', files: ['/achievements/certificate-2.webp'] },
  { year: '2022', title: 'International Student Olympiad — Ecology, bronze medal', category: 'olympiads', files: ['/achievements/certificate-17.webp'] },
  { year: '2021', title: 'International Student Olympiad — Russian Language, gold medal', category: 'olympiads', files: ['/achievements/certificate-4.webp'] },

  { year: '2024', title: 'Regional Expert Commission of the Russian School Olympiad in Ecology', category: 'appreciation', files: ['/achievements/certificate-26.webp'] },
  { year: '2024', title: 'Russian Energy Week — Letter of Appreciation from Anton Kobyakov', category: 'appreciation', files: ['/achievements/certificate-37.webp', '/achievements/certificate-27.webp'] },
  { year: '2023', title: 'Pristine Russia Forum and Exhibition — V. I. Vernadsky Foundation', category: 'appreciation', files: ['/achievements/certificate-32.webp'] },
  { year: '2023', title: 'AIESEC BreakPoint Youth Career Forum — Speaker', category: 'appreciation', files: ['/achievements/certificate-33.webp'] },
  { year: '2023', title: 'Regional Expert Commission of the Russian School Olympiad in Ecology', category: 'appreciation', files: ['/achievements/certificate-36.webp'] },
  { year: '2023', title: 'Russian–African Forum — Letter of Appreciation from Anton Kobyakov', category: 'appreciation', files: ['/achievements/certificate-35.webp', '/achievements/certificate-10.webp'] },
  { year: '2022', title: 'NUST MISIS — Case School of the Club of Project Initiatives', category: 'appreciation', files: ['/achievements/certificate-9.webp'] },

  { year: '2025', title: 'Center for Integration and Cooperation with Russia and Latin America', category: 'programs', files: ['/achievements/certificate-12.webp'] },
  { year: '2024', title: 'Oxford Climate Society — School of Climate Change Hilary', category: 'programs', files: ['/achievements/certificate-5.webp'] },
  { year: '2024', title: 'Venture Academy Siberia — Moscow Innovation Cluster', category: 'programs', files: ['/achievements/certificate-14.webp'] },
  { year: '2024', title: 'ProMentor RUDN — State Environmental Policy', category: 'programs', files: ['/achievements/certificate-22.webp'] },
  { year: '2023', title: 'First Step Internship Program — Finalist', category: 'programs', files: ['/achievements/certificate-29.webp'] },
  { year: '2023', title: 'Digital Innopolis Days', category: 'programs', files: ['/achievements/certificate-13.webp'] },
  { year: '2023', title: 'ProMentor RUDN — Project Management', category: 'programs', files: ['/achievements/certificate-6.webp'] },
  { year: '2022', title: 'V. I. Vernadsky Foundation Scholarship', category: 'programs', files: ['/achievements/certificate-1.webp'] },
  { year: '2022', title: 'VII International Youth Forum on Sustainable Development — MGIMO', category: 'programs', files: ['/achievements/certificate-25.webp'] },
  { year: '2022', title: 'International Student Conference on Environment and Sustainable Development — Tongji University', category: 'programs', files: ['/achievements/certificate-18.webp'] },
  { year: '2022', title: 'International Environmental Forum Ecosystem Protected Land', category: 'programs', files: ['/achievements/certificate-15.webp'] },
  { year: '2022', title: 'International Youth Forum Global Eurasia', category: 'programs', files: ['/achievements/certificate-16.webp'] },
  { year: '2022', title: 'ProMentor RUDN — Environmental Engineering', category: 'programs', files: ['/achievements/certificate-24.webp'] },
  { year: '2022', title: 'Atomic School Forum — MEPhI', category: 'programs', files: ['/achievements/certificate-21.webp'] },
];
