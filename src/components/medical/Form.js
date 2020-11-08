import React, { Component } from 'react';


class Form extends Component {

    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div class="medical-form">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 m-auto">
                            <h1 class="display-4 text-center">Medical Form</h1>
                            <hr />
                            <form>
                                First Name:
                                <div class="form-group">
                                    <input type="text"
                                        class="form-control form-control-lg "
                                        placeholder="First Name"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.onChange.bind(this)} />
                                </div>
                                Last Name:
                                <div class="form-group">
                                    <input type="text"
                                        class="form-control form-control-lg "
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.onChange.bind(this)} />
                                </div>
                                Address:
                                <div class="form-group">
                                    <textarea class="form-control form-control-lg"
                                        placeholder="Address"
                                        name="address"
                                        value={this.state.addres}
                                        onChange={this.onChange.bind(this)}>
                                    </textarea>
                                </div>
                                Start Date
                                <div class="form-group">
                                    <input type="date"
                                        class="form-control form-control-lg"
                                        name="startDate"
                                        value={this.state.startDate}
                                        onChange={this.onChange.bind(this)} />
                                </div>
                                End Date
                                <div class="form-group">
                                    <input type="date"
                                        class="form-control form-control-lg"
                                        name="endDate"
                                        value={this.state.endDate}
                                        onChange={this.onChange.bind(this)} />
                                </div>

                                <input type="submit" class="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;