import * as React from 'react';

const RatingComponent: any = (props: any) => {

    const star_blackwhite = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHPSURBVEiJtdW9axRRFAXwn8ISUTGkUJPFaERFRBCbCEZIIGghKKz/gJ3aBC2sA6KdH39CLGy0DAo2WgaVEG1ULDSFLOJHEDUBjUZ3Ld4NbNadZEbXAxdm3j3n3Hkfcx/FcBzHCmpyYwi1iKH/UWAc7yPG222+DT9xEZfwC9vbWeAqFrAFZfzA5XaZr8VH3GwYu4VPWNeOAmdQx0DD2KEYO/23pl3Yg0E8w+MWnCeRGwxuV5bZCdzGJKqYj69bjBoqGbpaE3c+PCbDs7JKWt8NuIcPeBcxg7d4GaJW6MUu9GAjuiM24Qi+wLWofh2lrGkWQCm86uENzsV076PzH8zX4254XWhOnsR3PJWmXhQ90sYv4FQWaRif8Qb7C5jvxWvM4ehK5H3Sps7It1ydwa2GNhdGpE3Ks1S9wR1plVydITogHdWs49mIqnSc+4sUGMBEDvNFPLC0lSxbYDN24FHTeB/GIvqacg+xM7QroiKt6cF4X4NRfJVOyVw8j0ZOcOtat5Q/cEXqKR04jBchvoOt0n1wQ/qZXkl3dAe+yXlHTGBaalZ1PJf+j2YMR64e3Gk5920qRLM4b/n+VArObGim8hTYLfWmch5yoIyzoV2C32I5dUzFTQpoAAAAAElFTkSuQmCC";
    const star_colored = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIQSURBVEiJtZO7axRRGMV/38yyOySCD4gkIlpJwFikUXzksWujRSwEsREDloYUavIPWFmkFGxSGLEUrBSx0M2a2Ak2KlhoI8RICApmZWd3M8di1zDMzGZnNB4YmHvuPed8331ABmixcEFLhYksGktt/sobRyq3VFaysVoljc5JXYp0q12QId1MK0vVgV54h8npE+C2qQDHjtho7XM3bboOcpoOmbd0ga6nkXbtQG/ooep9Ae2LTP2g5h+0c1S303fvoFq4mmAOsAfPu9JNntiBlthLkO8Hpw/pHsZQolq8x2wKgjWc+qqN8j0WoMX8RcyugfWDBoA+oNCtsg7wgTWwr6BVpPumirfeYQt2AFp3MC38H3PA7IFjY/4McAPQDloL7LaN+TNbh6yKNwmaB/L/aN5ENmXF2jxEbpEq3lnQY2D3X5pvIC5b0X/2h4hdU5Xzx3DsKXAoo/kKBBM23ngbJmMPzUr1dxhzGc3BuBM1TwxoQScyB0jHk+gOAXY6c0AHTfwMXu/aT7PxLXsAEOQGrFRdDVPxDjbr21W/0f6S4TZORql4gOxMolg8wXWGcN1BTA9JephBfJtyCVanIuMPyKatWCuHuElVvAXQXeDoFmvEAhIO2bz2z09gll5/OGLeWjVee0mvPwzMtteGtaHMCLRcGGST87juIxv5tRIvIA4t9xyguXmJHM9txP8YnvsNJlihJu4K2ugAAAAASUVORK5CYII=";
    const star_selected = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYEAYAAACw5+G7AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnCAcUFQfYzIr5AAADpklEQVRYw82Xb0xbVRjGf+e2bnOMDo3FsgobEYUER4mOMNbhGJioIGJURuLch7kF2hWo9c8HYhzil8WZAToZzRRm/BMzZJmJDpvYhMRE5EtlRmVT/OD819FODSSSatJ7/AC3H4DlXtMWeL6c5N73fZ/nOefc95wrSDFef6BtBCwWc9Q0ACMj8nlOgpTxt+MXoa6uPXCyFmZnU8WnpNqA+WGlENxu+RS54HTyB8dh926T25QDLleq+VJmYGiosRFMJvmoUgAtLUsCnuBb8Hg6ZacEs3nNGYg67BZoaOCc9EJ+/pKA44QgL8/66uyXUF+/5gyIGu6GtjbdOLNqMRK3Ygbe+M6XC8XFMpOHYM8e3YT14i3Yu/dUtbceSkpW3QC3yDi0t9NKDwhhNE39QITA40mWXsx/VIqSc/DPT6GoSP5m+gJsNvUbMiAnR3bIDrBauV3MgM2GTW4Gm01sJQhWK49xD1RX0yRehg0bDDOflUchFuMH4YfRUfmJ7IBIRHwk8mB6WlrlzxAOi2PiGESjynb+hnBY2ONOuHo1fObmB+HyZdE37rsBgkFC0gM1NUmvyErhHb6GYFDhfdm0bNdY63AxB9u2KTKT+6GxkV7+hXB4tXXpYkGnnKIVmpoSH13/x74xsNvls2oFXLggvcIHDsdq603gGV6ByUk5YHoXamtbnzxxGK5cWdI1eqRXQlbW+lxxCs6flx1MQVXVqgmfEgMwNmYuUu6AhoYW14mv4No17fV1297Q2U4J69ZFS2cOw+AgQTJh//4VE76VSzA8vLFucwAOHDgougTEYovDdPu2lABC9EWe3gJ+vxhmHzQ3p0u3fJwhOH3ak937O7hc8yfLvIrloHuQaQWUHlEJkUi6hCf4RimA6Wk94YYNJGYmW30RnM50G5D72P5/eHQNJK6/G8WvUFaWbgPKjVyC8nKj125dA7f2/+UFh4M4Adi0Kd0GZDclkJFhfWHmPSOXPf0tVKCYYedOwwqK+QlUlTflc+D3J0btuUEoVUxARUXSBuSP5Bvak6O8BKGQ2KLEwOn0XHztNnC7tVH5XDkDO3ZofV2vnFoua2DXrqQN4KN52RO5jnshGpWP8AscOnTkw94sKCs7cmd3AMbHF4e7j3bfBBMTkR7LLFRWanlancXxIlvcB6Wlya/A9/RDIMAkLpibk3ehQl+fGPnnMygsbLX3noPBQaNtr0t0CVDVRN5CHa1ugkfjTRW0/4aUFbzehC0cnEbj/wNbyEuN5fhVnwAAAABJRU5ErkJggg==";
    const refresh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAB2AAAAdgFOeyYIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQFJREFUOI2t0r1KA0EUhuHHDVZpbC0UVAgSLK1SB0QQEX+wsYl6E96AtxEQkkZvQCtLO8HS4A+IoiKIIIiKicWOsCy7y4oeGJiZ75x3PuYc/hiVxH4XPbxgGlvYxjxqeMBzEWyAFvbwhQsc4BC3+EQb1SLAa0heSGkRNnCHE4xkAd4DZIDznEdqAdLNEhtYC6uRZxPr6KNekFMYEa6w83OAFSyXBPRxiqkkoInNX7io4C0J6GGmZHGEWVwnLyfFfW6WACyJ52QsLbRxifGC4lHcoJMlVsVDco9VDKdszwXbZ3IGSRC64p9+xDGO8BRsd9LFQzmgOhYxgQ9x3/eD/f+Nbw5pN0YLMIc0AAAAAElFTkSuQmCC";

    let _rate = props.rate;

    React.useEffect(() => {
        handleToggle(props.rate * 3);
    }, [props]);

    const handleCursor = (e: any) => {
        e.target.style.cursor = 'pointer';
    }

    const handleToggle = (_value: number) => {
        let images_all: any = document.querySelectorAll('img');
        let images = [];
        _rate = _value;

        for (let i = 0; i < images_all.length; ++i)
            if (images_all[i].id !== '')
                images.push(images_all[i]);

        for (let i = 0; i < images.length; ++i)                 // temporarly show all stars
            images[i].style.display = 'block';

        if (_value % 3 === 1)
            _value += 2;
        if (_value % 3 === 2)
            _value += 1;

        for (let j = 0; j < _value; ++j)
            if (images[j].id % 3 === 0 || images[j].id % 3 === 1)
                images[j].style.display = 'none';

        for (let i = _value + 1; i < images.length; ++i)
            if (images[i].id % 3 === 0 || images[i].id % 3 === 2)
                images[i].style.display = 'none';
    }

    const handleClick = () => {

        let images_all: any = document.querySelectorAll('img');
        let images = [];
        let v = (_rate + 1);
        console.log(v);

        for (let i = 0; i < images_all.length; ++i)
            if (images_all[i].id !== '')
                images.push(images_all[i]);

        for (let i = 0; i < images.length; ++i)                 // temporarly show all stars
            images[i].style.display = 'block';

        // if (_rate % 3 === 1)
        //     _rate += 2;
        // if (_rate % 3 === 2)
        //     _rate += 1;

        // for (let j = 0; j < _rate; ++j)
        //     if (images[j].id % 3 === 1 || images[j].id % 3 === 2)
        //         images[j].style.display = 'none';

        // for (let i = _rate + 1; i < images.length; ++i)
        //     if (images[i].id % 3 === 0 || images[i].id % 3 === 1)
        //         images[i].style.display = 'none';

        props.sendToOuput((_rate + 1) / 3);
    }

    return <>
        <table>
            <tbody>
                <tr>
                    <td><img id="1" src={star_blackwhite}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="2" src={star_colored}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="3" src={star_selected}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="4" src={star_blackwhite}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="5" src={star_colored}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="6" src={star_selected}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="7" src={star_blackwhite}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="8" src={star_colored}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="9" src={star_selected}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="10" src={star_blackwhite}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="11" src={star_colored}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="12" src={star_selected}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="13" src={star_blackwhite}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="14" src={star_colored}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>
                    <td><img id="15" src={star_selected}
                        onMouseEnter={(e: any) => { handleCursor(e); handleToggle(parseInt(e.target.id)); }}
                        onClick={handleClick}
                    /></td>

                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={refresh}
                            onMouseEnter={(e: any) => { handleCursor(e); }}
                            onClick={() => { handleToggle(-1); handleClick(); }}
                        />
                    </td>
                </tr>

            </tbody>
        </table>
    </>
}

export default RatingComponent