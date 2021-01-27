import React from 'react';
import classes from './GenericTag.module.css';

const Tag = (props) => {
    return (
        <div className={classes.GenericTag}>
            <p className={classes.FrndTag}>{props.TagTitle}</p>
            <p className={classes.FrndTagCount}>{props.count}</p>
        </div>
    );
};

export default Tag;