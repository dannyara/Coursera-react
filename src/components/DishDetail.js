import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
    CardBody,
    ListGroupItem,
    Breadcrumb, BreadcrumbItem
} from "reactstrap";
import {useState} from "react";
import {Link} from "react-router-dom";


function RenderComments({comment, date}){
    return (
        <ul key={comment.id} className={'list-unstyled'}>
            <li>
                <div> {comment.comment}</div>
                <div> -- {comment.author}, {date}</div>
            </li>
        </ul>
    )
}

function DishDetail({dish, comments}) {

    const renderDish =() => {
        return(
            <Card>
                <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle> {dish.name}</CardTitle>
                    <CardText> {dish.description}</CardText>
                </CardBody>
            </Card>

        )
    }


    if (dish) {
        const getComments = comments.map((comment) => {
            if(comments){
                let options = { year: 'numeric', month: 'short', day: '2-digit'};
                const date = new Intl.DateTimeFormat('en-US', options).format(new Date(Date.parse(comment.date)))
                return <RenderComments comment={comment} date={date}/>
            }
            else{ return <div> </div>}
        })

        return (
            <div className={'container'}>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3> {dish.name}</h3>
                        <hr />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {renderDish()}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4> Comments</h4>
                        {getComments}
                    </div>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}
 export default DishDetail;