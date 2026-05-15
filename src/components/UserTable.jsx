import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UserTable = ({ users }) => {
    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
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
                                    <Button variant='danger-soft'>
                                        <Link href={`/users/${user._id}`}>Delete</Link>
                                    </Button>
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