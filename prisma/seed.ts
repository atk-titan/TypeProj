import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const typePara = [
  {
    "paragraph": "Digital technology has transformed communication, education, and work, enabling people to learn, collaborate, and innovate globally. With widespread internet access, skill development and knowledge sharing are easier than ever. Businesses leverage these tools to optimize operations, while AI and machine learning improve efficiency. Despite advancements, challenges like data privacy and ethical concerns arise. Responsible adoption and continuous learning are essential to thrive in this evolving digital era."
  },
  {
    "paragraph": "Climate change is one of the most significant challenges of our time, affecting ecosystems, weather patterns, and human life. Rising temperatures and extreme events threaten livelihoods and biodiversity. Governments and communities must reduce emissions, adopt renewable energy, and promote sustainable practices. Public awareness and education are essential to encourage responsible choices. With collective action, societies can mitigate impacts and work toward a healthier, more resilient planet for future generations."
  },
  {
    "paragraph": "Mental health is vital to overall well-being, influencing how individuals think, feel, and act. Stress, anxiety, and emotional challenges can affect productivity and relationships if left unaddressed. Encouraging open conversations, seeking support, and practicing mindfulness can significantly improve resilience. Schools, workplaces, and families play a role in creating supportive environments. Prioritizing mental health strengthens communities and helps individuals lead balanced, fulfilling lives."
  },
  {
    "paragraph": "Renewable energy sources such as solar, wind, and hydro are essential for a sustainable future. They help reduce dependence on fossil fuels, lower emissions, and protect natural resources. Investment in renewable technologies encourages innovation, job creation, and economic stability. Governments, businesses, and individuals must support clean energy adoption through policies and responsible practices. Transitioning to renewables is a crucial step toward preserving the environment for future generations."
  },
  {
    "paragraph": "Healthy eating plays a major role in maintaining physical and mental wellness. A balanced diet rich in vegetables, fruits, proteins, and whole grains provides energy and strengthens the immune system. Reducing processed foods and sugar supports long-term health and prevents diseases. Education about nutrition enables people to make informed choices. Combining good eating habits with proper hydration and regular exercise leads to a healthier, more active lifestyle."
  },
  {
    "paragraph": "Effective communication is essential in both personal and professional settings. Clear expression, active listening, and empathy help reduce misunderstandings and strengthen relationships. In workplaces, strong communication fosters teamwork, productivity, and leadership. Technology has introduced new channels for interaction, yet the need for meaningful human connection remains. Developing communication skills equips individuals to navigate challenges, negotiate solutions, and build trust with others."
  },
  {
    "paragraph": "Water conservation is critical for sustaining life, ecosystems, and future generations. With increasing demand and climate-related challenges, preserving freshwater resources is more important than ever. Simple actions like fixing leaks, reducing waste, and using efficient appliances can make a difference. Communities and industries must adopt sustainable water management practices. Raising awareness about water scarcity encourages collective responsibility and promotes long-term environmental protection."
  },
  {
    "paragraph": "Physical fitness is essential for maintaining a healthy body and mind. Regular exercise improves cardiovascular health, strengthens muscles, and boosts mood. Including strength training, stretching, and aerobic activities ensures balanced development. Proper sleep, hydration, and nutrition support physical performance. Engaging in fitness routines builds discipline and confidence, contributing to a more energetic and productive lifestyle. Staying active benefits both mental well-being and long-term health."
  },
  {
    "paragraph": "Innovation drives progress by encouraging creative solutions to complex problems. Advances in science, engineering, and technology lead to new products and services that improve quality of life. Supporting innovation requires collaboration among researchers, businesses, and governments. Encouraging experimentation and embracing change helps societies remain competitive and adaptable. Innovation not only boosts economic growth but also inspires individuals to explore new possibilities and contribute to global development."
  },
  {
    "paragraph": "Urban planning shapes the infrastructure and livability of cities. Good planning ensures efficient transportation, accessible housing, and green public spaces. It reduces congestion, improves air quality, and promotes sustainable growth. Involving community members in planning decisions helps address real needs and create inclusive environments. Smart technology and data-driven strategies enhance city management. Well-designed urban areas support healthier, more connected communities."
  },
  {
    "paragraph": "Financial literacy is essential for making informed decisions about saving, spending, and investing. Understanding basic concepts like budgeting, interest rates, and credit helps individuals manage money responsibly. Financial education empowers people to plan for emergencies, achieve long-term goals, and avoid debt. Schools, families, and organizations play a role in promoting financial awareness. Strong financial habits build stability and increase opportunities for economic growth."
  },
  {
    "paragraph": "Biodiversity is crucial for maintaining ecological balance and supporting life on Earth. Plants, animals, and microorganisms contribute to clean air, fertile soil, and stable climates. Habitat destruction, pollution, and climate change threaten species worldwide. Conservation efforts, protected areas, and sustainable practices help preserve ecosystems. Educating communities about biodiversity encourages responsible actions. Protecting nature today ensures a healthier environment for future generations."
  },
  {
    "paragraph": "Time management is a valuable skill that helps individuals stay organized and productive. Prioritizing tasks, setting realistic goals, and avoiding distractions can significantly improve focus. Tools like calendars and to-do lists support planning and accountability. Effective time management reduces stress and allows for a better work-life balance. Developing this skill enables people to make consistent progress and achieve personal and professional success."
  },
  {
    "paragraph": "Recycling plays an important role in reducing waste and protecting the environment. By reusing materials like plastic, paper, and metal, societies conserve resources and decrease pollution. Proper waste segregation ensures recyclable items are processed correctly. Communities can promote recycling through awareness programs and convenient collection systems. Individuals who adopt eco-friendly habits contribute to environmental sustainability and help create a cleaner planet."
  },
  {
    "paragraph": "Teamwork is essential for success in many fields, from business to sports and academics. Collaboration encourages diverse ideas, improves problem-solving, and builds trust among team members. Clear roles, open communication, and mutual respect enhance productivity. Working in teams teaches valuable skills such as leadership, empathy, and adaptability. When individuals combine strengths and support one another, they achieve goals more efficiently and effectively."
  },
  {
    "paragraph": "Cybersecurity is increasingly important as digital platforms continue to grow. Protecting data from unauthorized access, fraud, and cyberattacks requires strong security measures and awareness. Individuals should use strong passwords, update software regularly, and avoid suspicious links. Organizations must implement advanced security systems and conduct regular audits. Prioritizing cybersecurity helps safeguard personal information and maintain trust in digital services."
  },
  {
    "paragraph": "Cultural diversity enriches society by bringing unique traditions, languages, and perspectives together. Interacting with different cultures promotes understanding, creativity, and mutual respect. Celebrating diversity encourages inclusivity and reduces prejudice. Schools, workplaces, and communities benefit when people learn from one another. Embracing cultural differences strengthens social bonds and contributes to a more harmonious, connected world."
  },
  {
    "paragraph": "Volunteering plays a significant role in strengthening communities. It allows individuals to contribute time, skills, and compassion toward meaningful causes. Volunteers support education, healthcare, and environmental initiatives, improving the lives of others. The experience also builds empathy, confidence, and leadership. Encouraging volunteerism fosters a culture of cooperation and social responsibility, creating positive change within communities."
  },
  {
    "paragraph": "Sustainable agriculture is essential for feeding a growing global population while preserving the environment. Practices like crop rotation, reduced chemical use, and efficient water management improve soil health and biodiversity. Farmers adopting sustainable techniques can increase yields and reduce environmental damage. Supporting local agriculture and eco-friendly products encourages responsible consumption. Sustainable farming ensures long-term food security and environmental balance."
  },
  {
    "paragraph": "Reading regularly enhances knowledge, creativity, and critical thinking. Books expose readers to new ideas, cultures, and perspectives, expanding understanding of the world. Reading also improves vocabulary, focus, and communication skills. Making reading a habit reduces stress and boosts cognitive function. Encouraging reading from a young age fosters curiosity and lifelong learning. It is a simple yet powerful tool for personal growth."
  },
  {
    "paragraph": "Entrepreneurship drives economic growth by transforming ideas into innovative products and services. Entrepreneurs take risks, create jobs, and introduce solutions that address real-world challenges. Supportive ecosystems with mentorship, funding, and education empower aspiring entrepreneurs. Creativity, adaptability, and resilience are essential traits for success. Strong entrepreneurial communities contribute to national development and inspire individuals to pursue their ambitions."
  },
  {
    "paragraph": "Self-discipline is crucial for achieving long-term goals. It involves controlling impulses, staying focused, and making consistent efforts even when motivation fades. Developing routines, setting priorities, and avoiding distractions strengthen discipline. This skill improves productivity, decision-making, and personal growth. Individuals who practice self-discipline build habits that contribute to success in academics, work, and health."
  },
  {
    "paragraph": "Art and creativity play a meaningful role in expressing emotions, sharing ideas, and inspiring change. Whether through painting, music, or writing, art encourages imagination and emotional connection. Creative activities reduce stress and enhance problem-solving skills. Communities that support artistic expression foster innovation and cultural enrichment. Art brings people together and helps preserve cultural heritage."
  },
  {
    "paragraph": "Social responsibility involves acting in ways that benefit society and protect the environment. Businesses and individuals can contribute by reducing waste, supporting ethical practices, and promoting fairness. Responsible actions build trust and encourage sustainable development. Communities thrive when people prioritize collective well-being over short-term gains. Practicing social responsibility strengthens social harmony and ensures a better future for everyone."
  },
  {
    "paragraph": "Digital learning has expanded access to education, allowing students to learn anytime, anywhere. Online courses, interactive platforms, and virtual classrooms offer flexibility and personalized learning experiences. Technology supports collaboration and improves engagement through multimedia tools. However, digital learning requires discipline and reliable access. When used effectively, it complements traditional education and prepares learners for a technology-driven world."
  },
  {
    "paragraph": "Environmental awareness is essential for preserving natural resources and reducing pollution. Understanding the impact of human activities encourages responsible choices like recycling, conserving water, and reducing waste. Schools and communities play a key role in promoting eco-friendly habits. Increased awareness leads to collective action, supporting conservation efforts and ensuring a healthier planet for future generations."
  },
  {
    "paragraph": "Emotional intelligence helps individuals understand and manage their emotions as well as empathize with others. It improves communication, strengthens relationships, and supports better decision-making. Developing emotional intelligence involves self-awareness, self-control, and active listening. In workplaces, it enhances leadership and teamwork. Cultivating this skill leads to personal growth and healthier social interactions."
  },
  {
    "paragraph": "Technology in healthcare has improved diagnosis, treatment, and patient care. Tools like telemedicine, electronic records, and AI-powered analysis help doctors make faster, more accurate decisions. These advancements increase efficiency and accessibility, especially in remote areas. However, protecting patient data and ensuring ethical use are essential. With responsible integration, technology can transform healthcare and improve quality of life."
  },
  {
    "paragraph": "Goal-setting provides direction and motivation in personal and professional life. Clear, achievable goals help individuals focus on what truly matters. Breaking goals into smaller steps makes progress more manageable. Regular reflection and adjustment ensure continuous improvement. Setting goals builds discipline, boosts confidence, and encourages growth. It is an effective strategy for turning aspirations into accomplishments."
  }
];

export async function main() {
  await prisma.typeParagraph.createMany({
    data: typePara
  });
}

// main();