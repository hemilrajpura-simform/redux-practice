import {connect} from 'react-redux';
import Home from "../components/Home";
import {} from '../services/actions/actions';
import { addToCart } from '../services/actions/actions';


const mapStateToProps=state => ({

})

const mapDispatchToProps =dispatch=>({
addToCartHandler:data=> dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;