package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/ses"
	sesTypes "github.com/aws/aws-sdk-go-v2/service/ses/types"

	"github.com/charmbracelet/log"
)

type SendContactInput struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Message   string `json:"message"`
}

func SendEmail(input SendContactInput) error {
	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		log.Error("Unable to get default aws config", "error", err)
		return err
	}
	client := ses.NewFromConfig(cfg)

	params := ses.SendEmailInput{
		Destination: &sesTypes.Destination{
			ToAddresses: []string{
				"toddcarney44@gmail.com",
			},
		},
		Source: aws.String("toddcarney44@gmail.com"),
		Message: &sesTypes.Message{
			Body: &sesTypes.Body{
				Text: &sesTypes.Content{
					Data: aws.String(fmt.Sprintf("First Name: %s\nLast Name: %s\nEmail: %s\n\nMessage:\n%s", input.FirstName, input.LastName, input.Email, input.Message)),
				},
			},
			Subject: &sesTypes.Content{
				Data: aws.String("Contact from Personal Site"),
			},
		},
	}

	output, err := client.SendEmail(context.Background(), &params)
	if err != nil {
		log.Error("Error sending email", "error", err)
		return err
	}

	log.Info("Email sent", "output", output)
	return nil
}

func handler(event events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	log.Info("Handling POST /send-contact", "Event", event)

	var input SendContactInput
	if event.Body == "" {
		log.Error("No body is present on the event", "Event", event)
		return events.APIGatewayProxyResponse{
			StatusCode: 400,
			Body:       "A body is required",
		}, nil
	}
	err := json.Unmarshal([]byte(event.Body), &input)
	if err != nil {
		log.Error("Unable to unmarshall event body", "Event", event)
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       "Unable to unmarshall output",
		}, nil
	}

	err = SendEmail(input)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       "Error sending email",
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       "Email sent",
	}, nil
}

func main() {
	lambda.Start(handler)
}
