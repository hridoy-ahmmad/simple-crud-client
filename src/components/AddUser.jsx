

'use client'
import { Envelope, Plus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import React from 'react';

const AddUser = ({ addUser }) => {

    return (
        <div className="flex justify-center my-5">
            <Modal>
                <Button variant="secondary"><Plus /> Add user</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <h1 className="text-center font-bold text-xl">Add user</h1>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form action={addUser} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <TextField className="w-full" name="email" type="email">
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>

                                        <TextField className="w-full" name="address">
                                            <Label>Address</Label>
                                            <Input placeholder="Enter your address" />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close">Add user</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default AddUser;