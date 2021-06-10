import { useEffect, useState } from 'react';
import {format, parseISO} from 'date-fns'
import { Container } from './styles';
import api from '../../services/api';

interface CourseUnit {
    name: string;
}

interface Activity {
    id: string;
    name: string;
    grade: number;
    activity_date: string;
    course_unit: CourseUnit
}

export function ActivityTable(){

    const [activities, setActivities] = useState<Activity[]>([])

    useEffect(() => {

        api.get('/activity')
            .then(response => setActivities(response.data))
    },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliacao</th>
                        <th>Data</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programacao Web</td>
                        <td>Implementacao de autenticao</td>
                        <td>9.00</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programacao Web</td>
                        <td>Desenvolvimento do Fronted</td>
                        <td>8.50</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programacao Web</td>
                        <td>Alterar estilos de paginas</td>
                        <td>10.00</td>
                        <td>05/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}