












'use client'

import { AlertDialog, Button, Table } from '@heroui/react';
import Link from 'next/link';


const UserTable = ({ users, deleteUser }) => {
    const handleDeleteUSer = async (id) => {
        await deleteUser(id)
    }
    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-150">
                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Status</Table.Column>
                        <Table.Column>Action</Table.Column>

                    </Table.Header>
                    <Table.Body>

                        {
                            users.map(user => <Table.Row key={user._id}>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.address}</Table.Cell>
                                <Table.Cell className={'flex gap-2'}>
                                    <Button variant='outline'>
                                        <Link href={`/users/${user._id}`}>Details</Link>
                                    </Button>
                                    <Button variant='outline'>
                                        <Link href={`/users/${user._id}`}>Edit</Link>
                                    </Button>
                                    <AlertDialog>
                                        <Button variant="danger">Delete Project</Button>
                                        <AlertDialog.Backdrop>
                                            <AlertDialog.Container>
                                                <AlertDialog.Dialog className="sm:max-w-100">
                                                    <AlertDialog.CloseTrigger />
                                                    <AlertDialog.Header>
                                                        <AlertDialog.Icon status="danger" />
                                                        <AlertDialog.Heading>Delete user permanently?</AlertDialog.Heading>
                                                    </AlertDialog.Header>
                                                    <AlertDialog.Body>
                                                        <p>
                                                            This will permanently delete <strong>{user.name}</strong> and all of its
                                                            data. This action cannot be undone.
                                                        </p>
                                                    </AlertDialog.Body>
                                                    <AlertDialog.Footer>
                                                        <Button slot="close" variant="tertiary">
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            onClick={() => handleDeleteUSer(user._id)}
                                                            slot="close" variant="danger">
                                                            confirm Delete
                                                        </Button>
                                                    </AlertDialog.Footer>
                                                </AlertDialog.Dialog>
                                            </AlertDialog.Container>
                                        </AlertDialog.Backdrop>
                                    </AlertDialog>
                                </Table.Cell>

                            </Table.Row>)
                        }

                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default UserTable;