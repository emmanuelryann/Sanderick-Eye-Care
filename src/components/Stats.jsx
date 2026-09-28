import '../styles/Stats.css';

const statsData = [
  {
    icon: (
      <svg className="stats__icon-svg" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="7" r="3.5" />
        <path d="M12 12.5C8.41 12.5 5.5 15.19 5.5 18.5V19.5H18.5V18.5C18.5 15.19 15.59 12.5 12 12.5Z" />
      </svg>
    ),
    number: '25,000+',
    label: 'Happy patients treated',
  },
  {
    icon: (
      <svg className="stats__icon-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
        <path d="M18.5 15.5L19.3 18.2L22 19L19.3 19.8L18.5 22.5L17.7 19.8L15 19L17.7 18.2L18.5 15.5Z" />
      </svg>
    ),
    number: '15+ Years',
    label: 'Of expertise in eye care',
  },
  {
    icon: (
      <svg className="stats__icon-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 20H6V9H2V20ZM22 10C22 8.9 21.1 8 20 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10H22Z" />
      </svg>
    ),
    number: '98%',
    label: 'Patient satisfaction rate',
  },
  {
    icon: (
      <svg className="stats__icon-svg" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#ffffff" />
        <path
          d="M8.5 12L11 14.5L15.5 9.5"
          stroke="var(--color-primary)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    number: '10,000+',
    label: 'Successful surgeries',
  },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {statsData.map((stat, index) => (
            <div className="stats__card" key={index}>
              <div className="stats__icon-box">
                {stat.icon}
              </div>
              <div className="stats__number">{stat.number}</div>
              <div className="stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
