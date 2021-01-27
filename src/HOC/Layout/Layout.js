import React, { useContext } from 'react';
import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';
import { connect } from 'react-redux';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import { Container, Col, Row } from 'react-bootstrap';
import * as MediaActions from "../../Assets/MediaActions/MediaActions";
import SideNavCard from '../../Components/SideNavItems/SideNavItems';
import AuthPage from '../../Containers/Authentication/Authentication';
import { AuthContext } from '../Auth-Context/auth-context';
import { Route } from 'react-router-dom';
const Layout = (props) => {
    const authContext = useContext(AuthContext);
    const aNavListItems = [...props.aSideNavigation];
    let xSideNavList = aNavListItems.map((oNavItem, index) => {
        return (<SideNavCard key={index} Link={oNavItem.Link} exact={oNavItem.exact} icon={oNavItem.icon} menu={oNavItem.menu} />
        );
    });

    const aPagesLike = [...props.aPagesYouLike];
    const iPageLikeCount = aPagesLike.length;
    let xPagesYouLike = aPagesLike.map((oPageItem, index) => {
        return (<SideNavCard key={index} icon={oPageItem.icon} Link={oPageItem.Link} exact={oPageItem.exact} menu={oPageItem.menu} count={oPageItem.count} />);
    });

    console.log(props);
    return (
        <Aux>
            <Toolbar />
            <Container className={classes.MainContent}>
                <Row>
                    <Col sm={3} className={classes.SideMenu}>
                        <div className={classes.UserProfileCard}>
                            <Col sm={4} className={classes.FloatLeft}>
                                <img src={MediaActions.User} alt="ProfilePic" className={classes.ProfilePic} />
                            </Col>
                            <Col sm={8} className={classes.FloatLeft}>
                                <p className={classes.ProfileName}>{props.oUserDetails.username}</p>
                                <p>username</p>
                            </Col>
                        </div>
                        <div className={classes.NavigationPanel}>
                            <Aux>
                                {xSideNavList}
                            </Aux>
                        </div>
                        <div className={classes.SidePagesList}>
                            <p className={classes.PagesListHeading}>PAGES YOU LIKE - {(iPageLikeCount)}</p>
                            <hr />
                            <Aux>
                                {xPagesYouLike}
                            </Aux>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <main>
                            {props.children}
                        </main>
                    </Col>
                </Row>
            </Container>
        </Aux>
    );
};

const mapStateToProps = (state) => {
    return {
        aSideNavigation: state.aSideNavigation,
        aPagesYouLike: state.aPagesYouLike,
        oUserDetails: state.oUserDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);