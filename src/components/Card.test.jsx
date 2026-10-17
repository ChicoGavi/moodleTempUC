import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Componente Card - Trazabilidad QA', () => {
    it('debe construir correctamente la URL del perfil de GitHub del estudiante', () => {
        const mockEstudiante = {
            id: 1,
            nombre: 'Juan Pérez',
            frase: 'Probando en producción',
            github: 'ChicoGavi'
        };

        render(<Card estudiante={mockEstudiante} />);

        const link = screen.getByRole('link', { name: /Ver Perfil de GitHub/i });
        expect(link).toHaveProperty('href', 'https://github.com/ChicoGavi');
    });
});