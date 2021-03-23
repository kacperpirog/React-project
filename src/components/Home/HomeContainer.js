import { connect } from 'react-redux';
import Home from './Home';
import { createActionAddList, getList } from '../../redux/listsRedux';

const mapStateToProps = (state, props) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getList(props, state.lists),
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    title,
    image: props.lists[0].image,
    id: `list-${props.lists.length + 1}`,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);