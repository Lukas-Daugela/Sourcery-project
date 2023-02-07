import React from 'react';
import PropTypes from 'prop-types';

export default function NumberZeroIllustration(props) {
  return (
    <svg
      width="217"
      height="296"
      viewBox="0 0 217 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M97.7956 11.6304C40.8711 11.6304 0 54.2149 0 153.579C0 266.191 40.8711 296 97.7956 296C154.72 296 198.026 263.352 198.026 153.579C198.026 36.2348 154.72 11.6304 97.7956 11.6304ZM98.1698 258.62C58.7426 258.62 38.1443 231.649 38.1443 153.651C38.1443 84.8298 59.5858 48.537 99.013 48.537C138.44 48.537 159.882 72.3763 159.882 153.651C159.882 229.683 137.597 258.62 98.1698 258.62Z"
        fill="#4D8AF0"
      />
      <path
        d="M115.769 1C58.8448 1 17.9736 43.5845 17.9736 142.948C17.9736 255.56 58.8447 285.37 115.769 285.37C172.694 285.37 216 252.722 216 142.948C216 25.6044 172.694 1 115.769 1ZM116.143 247.99C76.7162 247.99 56.118 221.019 56.118 143.021C56.118 74.1994 77.5594 37.9066 116.987 37.9066C156.414 37.9066 177.855 61.7459 177.855 143.021C177.855 219.052 155.571 247.99 116.143 247.99Z"
        stroke="#3F3D56"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

NumberZeroIllustration.propTypes = {
  className: PropTypes.string,
};
