import React from 'react';

const SelectOption = (props) => {
	return (
		<div>
			<select className="select-option" id="course-select-id">
				<option name="firstOption">React with Wes Bos</option>
				<option name="secondOption">React with Mohamodani</option>
				<option name="thirdOption">Git Pro</option>
				<option name="fourthOption" />
				<option name="fifthOption" />
				<option name="sixthOption" />
				<option name="seventhOption" />
				<option name="eightthOption" />
			</select>
		</div>
	);
};

export default SelectOption;
