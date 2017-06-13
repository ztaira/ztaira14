import ProjectsBackup from '../src/Content/ProjectsBackup.js';

it('matches the response from api.github.com/users/ztaira14/repos', done => {
  let _this = this;
  let xhp = new XMLHttpRequest();
  xhp.onload = function() {
    let response = JSON.parse(this.responseText);
    // console.log(this.responseText);
    console.log(response.length);
    console.log(ProjectsBackup.length);
    expect(response.length).toBe(ProjectsBackup.length);
    done();
    for (let counter = 0; counter < 30; counter=counter+1) {
      console.log(i);
      let responseObject = response[i];
      let backupObject = ProjectsBackup.filter(item => {
        return item.name === responseObject.name;
      });
      expect(responseObject.name).toBe(backupObject.name);
      expect(responseObject.description).toBe(backupObject.description);
      expect(responseObject.language).toBe(backupObject.language);
      expect(responseObject.created_date).toBe(backupObject.created_date);
    };
    done();
  };
  xhp.onerror = function() {
    expect(true).toBe(false);
    console.log('it errored out');
    done();
  };
  xhp.open('GET', 'https://api.github.com/users/ztaira14/repos');
  console.log('sending xhp');
  xhp.send();
});
