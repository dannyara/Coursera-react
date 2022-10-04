import '../App.css';
import Menu from "../components/Menu";
import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Contact from "../components/ContactUs";
import DishDetail from "../components/DishDetail";
import About from "../components/AboutUs";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promos: state.promos,
        leaders: state.leaders
    }
}
function Main(props) {



    const HomePage = () =>{
        return(
            //get featured dish by filtering
            <Home
                dish={props.dishes.filter((dish) => dish.featured)[0]}
                promo={props.promos.filter((promo) => promo.featured)[0]}
                leader={props.leaders.filter((leader) => leader.featured)[0]}
            />
        )
    }
    //get parameter that is required for passing in id
    const getDishId = ({match}) => {
        let dish = props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]
        let comments_list = props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))
        return(
            <DishDetail dish={dish} comments={comments_list} />
        );
    };
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={props.dishes}/>}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/about' component={() => <About leaders={props.leaders}/> }/>
                <Route path='/menu/:dishId' component={getDishId}/>
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default withRouter(connect(mapStateToProps)(Main));
