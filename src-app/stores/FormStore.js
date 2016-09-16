import alt from '../alt.js';

import Actions from '../actions/Actions.js';
import axios from 'axios';

class FormStore {
  constructor() {
    console.log('STORE: store created');
    this.bindListeners({
      updateFormDataId: Actions.SET_ID,
      updateFormDataName: Actions.SET_NAME,
      updateFormDataJob: Actions.SET_JOB,
      saveForm: Actions.SUBMIT_FORM,
    });

    this.state = {
      id: 0,
      name: 'Default Name',
      job: 'Unemployed',
    };
  }

  updateFormDataId(id) {

    this.setState({
      id: id,
    });

    console.log('FORMSTORE: store state updated', this.state);
  }

  updateFormDataName(name) {

    this.setState({
      name: name,
    });

    console.log('FORMSTORE: store state updated', this.state);
  }

  updateFormDataJob(job) {

    this.setState({
      job: job,
    });

    console.log('FORMSTORE: store state updated', this.state);
  }

  saveForm(data) {

    const _this = this;

    console.log('FORM STATE BEFORE SAVE', this.state);

    axios
      .post('http://localhost:3033/users', this.state)
      .then((response) => {

        _this.setState({
          id: 0,
          name: 'Default Name',
          job: 'Default Job',
          status: 'data saved'
        });
      });
  }
}

FormStore.displayName = 'FormStore';

export default alt.createStore(FormStore);