import {useEffect, useState} from 'react';
import {GoFile, GoNote, GoGraph} from 'react-icons/go';
import api from '../../services/api';
import {Container} from './styles';

interface Activity {
    id: string;
    name: string;
    grade: number;
    activity_date: Date;
}

interface CourseUnit {
    id: string;
    name: string;
    description: string;
}


export function Summary(){

    const [activies, setActivies] = useState<Activity[]>([])
    const [courseUnits, setcourseUnits] = useState<CourseUnit[]>([])

    useEffect(() => {

        api.get('/activity')
            .then(response => setActivies(response.data))
    },[])

    useEffect(() => {

        api.get('/courseunit')
            .then(response => setcourseUnits(response.data))
    },[])

    return (
        <Container>
        <div>
            <header>
                <p>Unidades Curriculares</p>
                <GoFile size={40} />
            </header>
            <strong>
                {courseUnits.length}
            </strong>
        </div>
        <div>
            <header>
                <p>Atividades</p>
                <GoNote size={45} />
            </header>
            <strong>
                {activies.length}
            </strong>
        </div>
        <div className="highlight-background">
            <header>
                <p>Média Geral</p>
                <GoGraph size={40} />
            </header>
            <strong>
                {Number(activies.reduce((average,activity) => {
                   return average + Number(activity.grade)
                },0)/activies.length).toFixed(2)}
            </strong>
        </div>
    </Container>
    )
}