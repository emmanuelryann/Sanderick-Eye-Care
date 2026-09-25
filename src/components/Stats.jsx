import '../styles/Stats.css';

const statsData = [
  { number: '25,000+', label: 'Patients treated' },
  { number: '15+', label: 'Years of experience' },
  { number: '98%', label: 'Patient satisfaction' },
  { number: '10,000+', label: 'Procedures performed' },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        {statsData.map((stat, index) => (
          <div className="stats__card" key={index}>
            <div className="stats__number">{stat.number}</div>
            <div className="stats__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
