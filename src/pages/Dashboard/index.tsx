import { useState } from 'react';
import { ActivityTable } from "../../components/ActivityTable";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Container } from './styles';
import {NewActivityModal} from '../../components/NewActivityModal';
import {NewCourseUnitModal} from '../../components/NewCourseUnitModal';

export function Dashboard(){

    const [isNewActivityModalOpen, setNewActivityModalOpen] = useState(false);
    const [isNewCourseUnitModalOpen, setNewCourseUnitModalOpen] = useState(false);

    function handleOpenActivityModal(){
        setNewActivityModalOpen(true);
    }

    function handleOpenCourseUnitModal(){
        setNewCourseUnitModalOpen(true);
    }

    function handleCloseActivityModal(){
        setNewActivityModalOpen(false);
    }

    function handleCloseCourseUnitModal(){
        setNewActivityModalOpen(false);
    }

    return (
        <>
            <Header
                onOpenNewActivityModal={handleOpenActivityModal}
                onOpenNewCourseUnitModal={handleOpenCourseUnitModal}
            />
            <Container>
                <Summary/>
                <ActivityTable/>
            </Container>
            <NewActivityModal
                isOpen={isNewActivityModalOpen}
                onRequestClose={handleCloseActivityModal}
            />
            <NewCourseUnitModal
                isOpen={isNewCourseUnitModalOpen}
                onRequestClose={handleCloseCourseUnitModal}
            />
        </>
    )
}