import PropTypes from 'prop-types';

function Statistics({ title, stats}) {
    return (
        <section class="statistics">
            {title && <h2 class = "title">{title}</h2>}

            <ul class="stat-list">
                {stats.map(stat => {
                    return (
                        <li key={stat.id} class="item">
                            <span class="label"> {stat.label}</span>
                            <span class="percentage"> {stat.percentage}</span>
                        </li>);
                })}
    
  </ul>
</section>)
}

export default Statistics

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
)}