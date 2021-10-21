import dataSkills from '../data/dataSkills';

let view = '';
const Render = () => {
    if (dataSkills.length === 0) {
        view += 'No description';
    } else {
        dataSkills.forEach(({ title, image, skillsHeadOne, skillsOne, skillsHeadTwo, skillsTwo, skillsHeadThree, skillsThree, skillsHeadFour, skillsFour }) => {
            view = `
                <h2>${title}</h2>
                <div class="skills_image">
                    <img class="skills_image-img" src="${image}" alr="${title}" />
                </div>
                <div class="skills_learn">
                    <h3 class="skills_title">${skillsHeadOne}</h3>
                    <ul class="skills_learn-list">
                        ${skillsOne.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="skills_soon">
                    <h3 class="skills_title">${skillsHeadTwo}</h3>
                    <ul class="skills_learn-list">
                        ${skillsTwo.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="skills_soon">
                    <h3 class="skills_title">${skillsHeadThree}</h3>
                    <ul class="skills_learn-list">
                        ${skillsThree.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="skills_soon">
                    <h3 class="skills_title">${skillsHeadFour}</h3>
                    <ul class="skills_learn-list">
                        ${skillsFour.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    }
    return view;
};

export default Render;
