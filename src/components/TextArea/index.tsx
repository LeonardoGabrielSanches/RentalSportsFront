import { FormControl, FormErrorMessage, FormLabel, Text, Textarea as ChakraTextArea, TextareaProps as ChakraTextAreaProps } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface TextAreaProps extends ChakraTextAreaProps {
    name: string;
    label?: string;
    error?: FieldError;
    typedLength?: number;
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> =
    ({ name, label, error = null, typedLength, maxLength, ...rest }, ref) => {
        return (
            <FormControl textAlign="right" isInvalid={!!error}>
                {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                <ChakraTextArea
                    id={name}
                    name={name}
                    focusBorderColor="green.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{
                        bgColor: 'gray.900'
                    }}
                    size="lg"
                    maxLength={maxLength}
                    ref={ref}
                    {...rest}
                />

                {maxLength && <Text as="span">{`${typedLength} / ${maxLength}`}</Text>}

                {
                    !!error && (
                        <FormErrorMessage>
                            {error.message}
                        </FormErrorMessage>
                    )
                }
            </FormControl >
        )
    };

export const TextArea = forwardRef(TextAreaBase);