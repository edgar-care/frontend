import React, { useState } from 'react';
import { Box, Button, HStack, Icon, Text, VStack } from '@chakra-ui/react';

import StarClickedIcon from 'assets/icons/Stars/StarClickedIcon'
import StarDefaultIcon from 'assets/icons/Stars/StarDefaultIcon'
import StarHoverIcon from 'assets/icons/Stars/StarHoverIcon'

interface DocumentItemProps {
    document: {
        type: string;
        name: string;
        date: string;
        author: string;
        medicine: string;
        isStarred: boolean;
    };
    onStarClick: () => void;
    onRemoveClick: () => void;
    onEditClick: () => void;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ document, onStarClick, onRemoveClick, onEditClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const formaterDate = (dateISO: string): string => {
        const dateObj = new Date(dateISO);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <HStack
            bg="white"
            border="2px solid"
            borderColor="blue.200"
            borderRadius="8px"
            p="12px"
            w="100%"
            justify="space-between"
        >
            <HStack w="100%" spacing="8px">
                {document.isStarred ? (
                    <Icon as={StarClickedIcon} w="16px" h="16px" onClick={onStarClick} />
                ) : (
                    <Icon
                        as={isHovered ? StarHoverIcon : StarDefaultIcon}
                        w="16px"
                        h="16px"
                        onClick={onStarClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                )}
                <Box
                    bg={
                        document.type === 'PRESCRIPTION'
                            ? 'green.500'
                            : document.type === 'CERTIFICAT'
                                ? 'blue.700'
                                : document.type === 'XRAY'
                                    ? 'green.200'
                                    : document.type === 'OTHER'
                                        ? 'blue.200'
                                        : 'transparent'
                    }
                    h="42px"
                    w="4px"
                    borderRadius="4px"
                />
                <VStack w="100%" alignItems="start" spacing="0">
                    <Text size="boldLg">{document.name}</Text>
                    <Text size="sm">
                        Ajouté le {formaterDate(document.date)} par {document.author}
                    </Text>
                </VStack>
            </HStack>
            <HStack>
                <Button size="customSm" variant="delete" w="100%" onClick={onRemoveClick}>
                    Supprimer
                </Button>
                <Button size="customSm" variant="secondary" w="100%" onClick={onEditClick}>
                    Modifier
                </Button>
                <Button size="customSm" variant="primary" w="100%">
                    Télécharger
                </Button>
            </HStack>
        </HStack>
    );
};

export default DocumentItem;
