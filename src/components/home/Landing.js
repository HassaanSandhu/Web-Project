import React, { Component } from 'react';
import {connect} from 'react-redux'
import SerchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';

export class landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="Container">
               <SerchForm/>
               {loading ? <Spinner/> : <MoviesContainer/> }
            </div>
        )
    }
}
const mapStateToProps =state=>({
    loading: state.movies.loading

})
export default connect(mapStateToProps)(landing);
