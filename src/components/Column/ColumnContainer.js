import { connect } from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({ cards }, ColumnId) =>
  cards.filter((card) => card.ColumnId === ColumnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);
