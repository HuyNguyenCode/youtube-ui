import React, { Fragment, useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch({className}) {
    const [checked, setChecked] = useState(true);

    return (
        <Fragment>
            <ReactSwitch
                checked={checked}
                onChange={(val) => {
                    setChecked(val);
                }}
            />
        </Fragment>
    );
}

export default ToggleSwitch;
