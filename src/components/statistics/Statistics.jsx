import PropTypes from 'prop-types';
import {Section, Title, StatList, Item, Label,Percentage} from 'components/statistics/Statistics.styled'

export default function Statistics({ title, stats }) {
    return (
        <Section>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(stat => {
                    return (
                        <Item key={stat.id}>
                            <Label> {stat.label}</Label>
                            <Percentage> {stat.percentage}</Percentage>
                        </Item>);
                })}
    
  </StatList>
</Section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
)}